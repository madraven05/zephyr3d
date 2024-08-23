import Navbar from "@/components/navbar";
import "../styles/global.css";
import type { AppProps } from "next/app";
import SidebarLayout from "@/components/sidebar-layout";
import Link from "next/link";

function MyApp({ Component, pageProps, router }: AppProps) {
  const isHomePage = router.pathname === "/";
  return (
    <>
      <header className="flex z-30 items-center justify-between w-screen py-3 px-10 fixed top-0 right-0">
        <div>
          <Link href="/">
            <h2>Zephyr3D</h2>
          </Link>
        </div>
        <Navbar />
      </header>
      <div className="my-16">
        {isHomePage ? (
          <Component {...pageProps} />
        ) : (
          <SidebarLayout>
            <Component {...pageProps} />
          </SidebarLayout>
        )}
      </div>
      ;
    </>
  );
}

export default MyApp;
