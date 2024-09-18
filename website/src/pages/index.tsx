import Hero from "@/components/hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Zephyr3D</title>
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero></Hero>
    </main>
    </>
  );
}
