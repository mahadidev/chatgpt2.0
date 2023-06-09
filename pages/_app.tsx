import type { AppProps } from "next/app";
import { ContextProvider } from "../context";
import "./globals.css";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Head>
        <title>AI Chat Assistant for Voice and Text</title>
      </Head>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default App;
