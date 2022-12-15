import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import LoginForm from '@components/auth/LoginForm'
import { authorizationAtom } from '@store/authorization-atom'

import { useMutation } from 'urql'
import { useLoginMutation } from 'src/types'
import { useModalAction } from '@components/ui/modal/ModalContext'
import { useAuthAction } from '@contexts/AuthContext'
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

const LoginModal = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [, authorize] = useAtom(authorizationAtom)
  const { openModal, closeModal } = useModalAction()
  const [, handleLogin] = useLoginMutation()
  const { loginSuccess } = useAuthAction()
  const loading = false
  const onSubmit = async ({ email, password }: FormValues) => {
    const loginInput: FormValues = {
      email,
      password,
    }
    const { data, error } = await handleLogin({ loginData: loginInput })
    if (error) {
      console.log(error)
      setErrorMessage(error.message)
    }
    if (data?.login?.accessToken) {
      loginSuccess()

      Cookies.set('AUTH_TOKEN', data?.login?.accessToken)
      closeModal()
      window.location.reload()
    }
  }
  // console.log(data)
  return (
    <div className="my-auto flex w-screen flex-col justify-center rounded-lg bg-white py-6 px-5 md:max-w-[480px]">
      <div className="flex items-center justify-center p-5 mb-5 border-b-2">
        <h1 className="font-mono text-3xl font-bold">Login</h1>
      </div>
      <div>
        <h2>{errorMessage ? errorMessage : ''}</h2>
      </div>
      <LoginForm
        onSubmit={onSubmit}
        errorMessage={errorMessage}
        loading={loading}
      />
      <div className="flex flex-col items-center justify-center p-5 mb-5 space-y-3 border-t-2">
        <h1 className="font-mono text-lg font-bold">Don't have an account?</h1>
        <button
          onClick={() => openModal('REGISTER_VIEW')}
          className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
        >
          Signup
        </button>
      </div>
    </div>
  )
}

export default LoginModal
