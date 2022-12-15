import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { authorizationAtom } from '@store/authorization-atom'

import { useMutation } from 'urql'
import { useLoginMutation } from 'src/types'
import ForgotPasswordForm from './ForgotPasswordForm'
type FormValues = {
  email: string
  password: string
}

const loginMutate = `
mutation Login($data: LoginInput!) {
  login(data: $data) {
    accessToken
    refreshToken
  }
}
`

const ForgotPasswordModal = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [, authorize] = useAtom(authorizationAtom)

  const [{ data, fetching, error }, handleLogin] = useLoginMutation()

  const loading = false
  const onSubmit = async ({ email, password }: FormValues) => {
    const loginInput: FormValues = {
      email,
      password,
    }
    const { data } = await handleLogin({ loginData: loginInput })
    if (data?.login?.accessToken) {
      authorize(true)
      Cookies.set('AUTH_TOKEN', data?.login?.accessToken)
    }
  }
  // console.log(data)
  return (
    <div className="fle w-screen flex-col justify-center rounded-lg bg-white py-6 px-5 md:max-w-[480px]">
      <div className="mb-5 flex items-center justify-center border-b-2 pb-5">
        <h1 className="text-3xl">Quên mật khẩu</h1>
      </div>
      <ForgotPasswordForm
        onSubmit={onSubmit}
        errorMessage={errorMessage}
        loading={loading}
      />
    </div>
  )
}

export default ForgotPasswordModal
