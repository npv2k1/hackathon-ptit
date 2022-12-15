import React from 'react'
import * as yup from 'yup'
import { Form } from '@components/ui/forms/form'
import Input from '@components/ui/forms/input'
import PasswordInput from '@components/ui/forms/password-input'

interface LoginFormProps {
  errorMessage: string
  onSubmit: (formData: any) => void
  loading: boolean
}
type FormValues = {
  firstname: string
  lastname: string
  email: string
  password: string
}
const loginFormSchema = yup.object().shape({
  firstname: yup.string().required('error-firstname-required'),
  lastname: yup.string().required('error-lastname-required'),
  email: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
  password: yup.string().required('error-password-required'),
})
const RegisterForm: React.FC<LoginFormProps> = ({
  onSubmit,
  loading,
  errorMessage
}) => {
  return (
    <Form<FormValues> onSubmit={onSubmit} validationSchema={loginFormSchema}>
      {({ register, formState: { errors } }) => (
        <>
          <Input
            label={'Firstname'}
            {...register('firstname')}
            type="text"
            variant="outline"
            className="mb-5"
            error={errors.firstname?.message!}
          />
          <Input
            label={'Lastname'}
            {...register('lastname')}
            type="text"
            variant="outline"
            className="mb-5"
            error={errors.lastname?.message!}
          />
          <Input
            label={'Email'}
            {...register('email')}
            type="email"
            variant="outline"
            className="mb-5"
            error={errors.email?.message!}
          />
          <PasswordInput
            label={'Password'}
            {...register('password')}
            error={errors.password?.message}
            variant="outline"
            className="mb-5"      
          />
          <button
            type="submit"
            className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
          >
            Register
          </button>
        </>
      )}
    </Form>
  )
}

export default RegisterForm
