import Image from "next/image";
import {ProductCard} from '@zephyr3D/react';

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-400 flex-col items-center justify-between p-24">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        alias nesciunt adipisci tempore ut, ea id maiores quis iure minus,
        dolores nulla asperiores excepturi. Repudiandae reiciendis rem
        doloremque voluptatum vero?
      </p>
      <ProductCard></ProductCard>
    </main>
  );
}
