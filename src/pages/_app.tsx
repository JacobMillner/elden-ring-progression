import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Elden Ring Progress</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E626VPKZML"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E626VPKZML');
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
