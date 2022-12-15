import type { AppProps } from 'next/app'
import '../assets/css/globals.css'

import AppProvider from '@contexts/AppContext'
import { NextPage } from 'next'
import { ReactElement } from 'react'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
  authenticate?: boolean
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <>
      <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
    </>
  )
}

export default MyApp
