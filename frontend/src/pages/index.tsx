import { Button, message } from "antd";

import type { TableProps } from "antd";
import { Space, Table } from "antd";
import type {
  ColumnsType,
  FilterValue,
  SorterResult,
} from "antd/es/table/interface";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import AppProvider, { AppCtx } from "src/contexts/AppContext";
import { DatePicker, Form, Input } from "antd";
import moment from "moment";
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const Header = () => {
  const { methods, state } = useContext(AppCtx);
  return (
    <div className="w-full py-2 px-5 bg-gray-100">
      <Button
        onClick={() =>
          state?.account ? methods.changeAccount() : methods.connect()
        }
      >
        Connect
      </Button>
    </div>
  );
};

const CheckInTable = () => {
  const { methods } = useContext(AppCtx);
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  console.log(
    "🚀 ~ file: index.tsx ~ line 39 ~ CheckInTable ~ loading",
    loading
  );

  const [location, setLocation] = useState<any>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation(position.coords);
    });
  }, []);

  const Checkin = useCallback(async () => {
    if (!methods) return;

    if (location) {
      console.log(
        "JSON.stringify(location)",
        JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
        })
      );
      await methods.checkin(
        JSON.stringify({
          latitude: location.latitude,
          longitude: location.longitude,
        })
      );
      setLoading(true);
      message.success("Checkin success");
    } else {
      message.error("Please allow location");
      navigator.geolocation.getCurrentPosition(function (position) {
        setLocation(position.coords);
      });
    }
  }, [location, methods]);

  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      ellipsis: true,
    },
    {
      title: "Timestamp",
      dataIndex: "timestamp",
      key: "timestamp",
      render: (text) => text,
    },
    {
      title: "Latitude",
      dataIndex: "latitude",
      key: "latitude",
    },
    {
      title: "Longitude",
      dataIndex: "longitude",
      key: "longitude",
    },
    {
      title: "Reward",
      dataIndex: "reward",
      key: "reward",
    },
  ];

  // useEffect(() => {
  //   if (data) {
  //     setLoading(false);
  //   }
  // }, [data]);

  useEffect(() => {
    if (!loading) return;
    const fetchData = async () => {
      const res = await methods.getMyCheckin();
      console.log("🚀 ~ file: index.tsx ~ line 164 ~ fetchData ~ res", res);
      if (res) {
        const data = res?.map((item: any) => {
          return {
            id: item[0],
            timestamp: item[2],
            latitude: JSON.parse(item["checkinInfo"])?.latitude,
            longitude: JSON.parse(item["checkinInfo"])?.longitude,
            reward: 0,
          };
        });
        setData(data);
        setLoading(false);
      }

      // setLoading(false);
    };
    fetchData();
  }, [methods, loading]);

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={Checkin}>Checkin</Button>
        {/* <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button> */}
      </Space>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const formTailLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 8, offset: 4 },
};
const ProfileCard = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { state, methods } = useContext(AppCtx);
  const [balance, setBalance] = useState(0);
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const info = await methods.getUserInfo();
      console.log("🚀 ~ file: index.tsx ~ line 159 ~ getUserInfo ~ info", info);
      try {
        setUserInfo(JSON.parse(info));
        setLoading(false);
      } catch (e) {
        console.log("🚀 ~ file: index.tsx ~ line 162 ~ getUserInfo ~ e", e);
      }
    };
    getUserInfo();
  }, [methods, loading]);

  const handleSubmitUserInfo = useCallback(
    async (value: any) => {
      const dateOfBirth = moment(form.getFieldValue("dateOfBirth")).format(
        "DD/MM/YYYY"
      );
      const uri = JSON.stringify({ ...form.getFieldsValue(), dateOfBirth });
      try {
        await methods.setUserInfo(uri);
        setLoading(true);
        form.resetFields();
      } catch (e) {
        console.error(e);
        message.error("Update failed");
      }
    },
    [methods]
  );

  useEffect(() => {
    const getBalance = async () => {
      const balance = await methods.getBalance();
      setBalance(balance);
    };
    getBalance();
  }, [methods]);

  const formatAccount = (account: string) => {
    return account.slice(0, 6) + "..." + account.slice(-4);
  };

  const formatBalance = (balance: number) => {
    return balance / 10 ** 18;
  };

  return (
    <div className="flex flex-1 flex-col bg-white border border-gray-200 rounded-lg shadow-emerald-400 p-4">
      <div className="flex flex-col items-center pb-10 w-full">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={`https://avatars.dicebear.com/api/pixel-art/${state.account}.svg`}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {formatAccount(state?.account || "")}
        </h5>
        <span className="text-lg text-gray-700 ">{userInfo?.fullName}</span>
        <div>
          <span className="text-sm text-gray-500 ">
            {formatBalance(balance)}
          </span>
        </div>
        <div className="flex mt-4 space-x-3 md:mt-6"></div>
      </div>
      <div>
        <Form form={form} onFinish={handleSubmitUserInfo} name="dynamic_rule">
          <Form.Item
            {...formItemLayout}
            name="fullName"
            label="FullName"
            rules={[
              {
                required: true,
                message: "Please input your fullName",
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
                message: "Please input your address",
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <AppProvider>
      <div className="w-screen h-screen flex bg-white flex-col max-w-screen-2xl mx-auto">
        <Header />
        <div className="flex flex-1 bg-blue-100 flex-row ">
          <div className="flex flex-[3]">
            <div className="p-4">
              <CheckInTable />
            </div>
          </div>
          <div className="flex flex-1">
            <div className="flex flex-1 p-4">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default Home;
