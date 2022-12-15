import ForgotPasswordModal from '@components/auth/ForgotPasswordModal'
import LoginForm from '@components/auth/LoginForm'
import LoginModal from '@components/auth/LoginModal'
import RegisterModal from '@components/auth/RegisterModal'
import ResetPasswordModal from '@components/auth/ResetPasswordModal'
import PostModal from '@components/post/PostModal'
import dynamic from 'next/dynamic'
import LoginPage from 'src/pages/auth/login'
import Modal from './Modal'
import { useModalAction, useModalState } from './ModalContext'
// const Login = dynamic(() => import('@framework/auth/login'))
// const Register = dynamic(() => import('@framework/auth/register'))
// const ForgotPassword = dynamic(() => import('@framework/auth/forget-password'))




const ManagedModal = () => {
  const { isOpen, view, data } = useModalState()
  const { closeModal } = useModalAction()
  

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view === 'LOGIN_VIEW' && <LoginModal />}
      {view === 'POST_VIEW' && <PostModal />}
      {view === 'REGISTER_VIEW' && <RegisterModal />}
      {view === 'FORGOT_VIEW' && <ForgotPasswordModal />}
      {view === 'RESET_PASSWORD_VIEW' && <ResetPasswordModal />}
    </Modal>
  )
}

export default ManagedModal
