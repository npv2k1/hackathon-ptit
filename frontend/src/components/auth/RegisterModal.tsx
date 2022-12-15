import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import LoginForm from '@components/auth/LoginForm'
import { authorizationAtom } from '@store/authorization-atom'

import { useMutation } from 'urql'
import { useLoginMutation, useSignupMutation } from 'src/types'
import RegisterForm from './RegisterForm'
import { useModalAction } from '@components/ui/modal/ModalContext'
type FormValues = {
  firstname: string
  lastname: string
  email: string
  password: string
}

const RegisterModal = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [, authorize] = useAtom(authorizationAtom)

  const [{ data, fetching, error }, handleSignup] = useSignupMutation()

  const [signUpError, setSignUpError] = useState('')

  const { openModal, closeModal } = useModalAction()
  const loading = false
  const onSubmit = async ({
    email,
    password,
    firstname,
    lastname,
  }: FormValues) => {
    const registerInput: FormValues = {
      email,
      password,
      firstname,
      lastname,
    }
    const { data, error } = await handleSignup({ data: registerInput })
    if (data?.signup.accessToken) {
      authorize(true)
      Cookies.set('AUTH_TOKEN', data?.signup?.accessToken)
      closeModal()
      window.location.reload();
    }
    if (error) {
      console.log(error.graphQLErrors[0].message)
      setSignUpError(error.graphQLErrors[0].message)
    }
  }
  // console.log(data)
  return (
    <div className="fle w-screen flex-col justify-center rounded-lg bg-white py-6 px-5 md:max-w-[480px]">
      <div className="mb-5 flex items-center justify-center border-b-2 pb-5">
        <h1 className="text-3xl">Đăng ký</h1>
      </div>
      <div>
        {signUpError && (
          <p className="text-center text-red-500">{signUpError}</p>
        )}
      </div>
      <RegisterForm
        onSubmit={onSubmit}
        errorMessage={errorMessage}
        loading={loading}
      />
      <div className="mb-5 flex flex-col items-center justify-center space-y-3 border-t-2 p-5">
        <h1 className="font-mono text-lg font-bold">
          Already have an account?
        </h1>
        <button
          onClick={() => openModal('LOGIN_VIEW')}
          className="mr-2 mb-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default RegisterModal
