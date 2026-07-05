import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Chogan Webshop</title>
        <meta name="description" content="Modern webshop for Chogan products" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
