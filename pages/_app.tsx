import type { AppProps } from "next/app";
import { ContextProvider } from "../context";
import "./globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default App;
