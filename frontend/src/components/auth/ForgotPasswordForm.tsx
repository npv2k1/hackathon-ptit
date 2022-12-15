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
  email: string
  password: string
}
const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('error-email-format')
    .required('error-email-required'),
  password: yup.string().required('error-password-required'),
})
const ForgotPasswordForm: React.FC<LoginFormProps> = ({
  onSubmit,
  loading,
  errorMessage,
}) => {
  return (
    <Form<FormValues> onSubmit={onSubmit} validationSchema={loginFormSchema}>
      {({ register, formState: { errors } }) => (
        <>
          <Input
            label={'Email'}
            {...register('email')}
            type="email"
            variant="outline"
            className="mb-5"
            error={errors.email?.message!}
          />
          <button
            type="submit"
            className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
          >
            Forgot Password
          </button>
        </>
      )}
    </Form>
  )
}

export default ForgotPasswordForm
