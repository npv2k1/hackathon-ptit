import type { AppProps } from 'next/app'
import '../assets/css/globals.css'

import ManagedModal from '@components/ui/modal/ManagedModal'
import { ModalProvider } from '@components/ui/modal/ModalContext'
import AppProvider from '@contexts/AppContext'
import { AuthProvider } from '@contexts/AuthContext'
import { SettingProvider } from '@contexts/SettingContext'
import { NextPage } from 'next'
import { ReactElement } from 'react'
import { Provider } from 'urql'
import { client } from '../lib/graphql'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
  authenticate?: boolean
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
  const authProps = Component.authenticate

  return (
    <>
      <AppProvider>
        <SettingProvider>
          <Provider value={client}>
            <AuthProvider>
              <ModalProvider>
                {getLayout(<Component {...pageProps} />)}
                <ManagedModal />
              </ModalProvider>
            </AuthProvider>
          </Provider>
        </SettingProvider>
      </AppProvider>
    </>
  )
}

export default MyApp
