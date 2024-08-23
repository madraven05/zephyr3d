import Image from "next/image";
import {ProductCard} from '@zephyr3D/react';
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      
      <Hero></Hero>
    </main>
  );
}
