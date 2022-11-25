import '../styles/globals.css'
import App, { AppInitialProps, AppProps } from 'next/app'
import { wrapper } from 'src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';
import cookie from "cookie";
function MyApp({ Component, pageProps }: AppProps) {
  const store: any = useStore();
  return (
    <PersistGate
      {...{
        loading: null,
        persistor: store.__persistor,
      }}
    >
      <Component {...pageProps} />
    </PersistGate>
  )
}

MyApp.getInitialProps = async (
  appContext: any,
): Promise<AppInitialProps & AppProps> => {
  let user: string = "";
  const request = appContext.ctx.req;
  if (request) {
    request.cookies = cookie.parse(request.headers.cookie || "");
    user = request.cookies.userAddress ?? "";
  }

  const appProps = await App.getInitialProps(appContext);
  return {
    ...appProps,
    user,
  } as any;
};

export default wrapper.withRedux(MyApp);
