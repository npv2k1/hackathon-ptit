import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider appId={"hackathon-ptit-genesis-team"} serverUrl={"http://localhost:3000"}>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
