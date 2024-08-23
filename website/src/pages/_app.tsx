import Navbar from "@/components/navbar";
import "../styles/global.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="fixed top-0 right-0">
        <Navbar></Navbar>
      </header>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
