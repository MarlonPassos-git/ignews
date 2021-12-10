import { AppProps } from 'next/app'; // Define os tipos de props do App
import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

