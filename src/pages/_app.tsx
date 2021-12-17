import { AppProps } from 'next/app'; // Define os tipos de props do App
import '../styles/global.scss';
import { SessionProvider } from 'next-auth/react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={ pageProps.section}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp

