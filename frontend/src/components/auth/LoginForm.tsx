import React from 'react'
import * as yup from 'yup'
import { Form } from '@components/ui/forms/form'
import Input from '@components/ui/forms/input'
import PasswordInput from '@components/ui/forms/password-input'
import { useModalAction } from '@components/ui/modal/ModalContext'

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
const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  loading,
  errorMessage,
}) => {
  const { openModal } =  useModalAction()
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
          <PasswordInput
            label={'Password'}
            {...register('password')}
            error={errors.password?.message}
            variant="outline"
            className="mb-5"
            forgotPageRouteOnClick={() => openModal('FORGOT_VIEW')}
          />
          <button
            type="submit"
            className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
          >
            Login
          </button>
        </>
      )}
    </Form>
  )
}

export default LoginForm
