import Navbar from "@/components/navbar";
import "../styles/global.css";
import type { AppProps } from "next/app";
import SidebarLayout from "@/components/sidebar-layout";
import Link from "next/link";
import { ZephyrProvider } from "@/components/zephyr-context";
import Head from "next/head";
import Footer from "@/components/footer";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  const isHomePage = router.pathname === "/";

  useEffect(() => {
    console.log(window.innerWidth);
  });
  return (
    <div className="flex flex-col w-full">
      <ZephyrProvider>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/png" href="/assets/zephyr-icon.png" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
        </Head>
        <div className="flex shadow-lg backdrop-blur-lg bg-slate-500/10 z-30 items-center justify-between w-full lg:w-full py-3 px-7 fixed top-0">
          <div>
            <Link className="flex gap-3 items-center justify-center" href="/">
              <img
                className="h-10 backdrop-blur-md rounded-full shadow-lg"
                src="/assets/zephyr-icon.png"
              ></img>
              <p className="hidden font-heading uppercase text-4xl font-semibold lg:inline">Zephyr3D</p>
            </Link>
          </div>
          <Navbar />
        </div>
        <div className="my-16">
          {isHomePage ? (
            <Component {...pageProps} />
          ) : (
            <SidebarLayout>
              <Component {...pageProps} />
            </SidebarLayout>
          )}
        </div>
        <Footer />
      </ZephyrProvider>
    </div>
  );
}

export default MyApp;
