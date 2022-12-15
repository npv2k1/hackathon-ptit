import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { authorizationAtom } from '@store/authorization-atom'

import { useMutation } from 'urql'
import { useLoginMutation } from 'src/types'
import ResetPasswordForm from './ResetPasswordForm'
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

const ResetPasswordModal = () => {
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
      <ResetPasswordForm
        onSubmit={onSubmit}
        errorMessage={errorMessage}
        loading={loading}
      />
    </div>
  )
}

export default ResetPasswordModal
