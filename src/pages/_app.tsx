import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.css';
import React from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Elden Ring Progress</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E626VPKZML"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E626VPKZML');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
