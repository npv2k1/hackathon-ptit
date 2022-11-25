import { Button, DatePicker, Form, Input } from "antd";
import moment from "moment";
import { useConnectContractEmployee, useGetUser } from "src/hook";
import Container from "../share/container";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

const UserInfoClient = () => {
  const [form] = Form.useForm();
  const contractEmployee = useConnectContractEmployee()
  const user = useGetUser();
  
  const handleSubmitUserInfo = () => {
    const dateOfBirth = moment(form.getFieldValue("dateOfBirth")).format("DD/MM/YYYY")
    const uri = JSON.stringify({ ...form.getFieldsValue(), dateOfBirth })
    try {
      contractEmployee.methods.setInfo(uri).send({ from: user });
      form.resetFields();
    } catch (e) {
      console.log("error: ", e)
    }
  }

  return (
    <Container>
      <Form form={form} name="dynamic_rule">
        <Form.Item
          {...formItemLayout}
          name="username"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input your name',
            },
          ]}
        >
          <Input placeholder="Please input your name" />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name="address"
          label="Address"
          rules={[
            {
              message: 'Please input your address',
            },
          ]}
        >
          <Input placeholder="Please input your address" />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name="dateOfBirth"
          label="Date of birth"
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={handleSubmitUserInfo}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  )
}

export default UserInfoClient;