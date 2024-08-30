import Navbar from "@/components/navbar";
import "../styles/global.css";
import type { AppProps } from "next/app";
import SidebarLayout from "@/components/sidebar-layout";
import Link from "next/link";
import { ZephyrProvider } from "@/components/zephyr-context";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  const isHomePage = router.pathname === "/";
  return (
    <>
      <ZephyrProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, viewport-fit=cover"
          />
        </Head>
        <div className="flex shadow-lg backdrop-blur-lg bg-slate-500/10 z-30 items-center justify-between w-full py-3 px-7 fixed top-0">
          <div>
            <Link href="/">
              <h1>Zephyr3D</h1>
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
      </ZephyrProvider>
    </>
  );
}

export default MyApp;
