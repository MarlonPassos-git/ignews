import { AppProps } from 'next/app'; // Define os tipos de props do App


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

