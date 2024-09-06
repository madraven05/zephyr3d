import { Canvas } from "@react-three/fiber";
import React from "react";
import { Blob } from "@zephyr3D/react";
import { OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";

const BlobExample = () => {
  return (
    <div className="flex bg-white/10 h-96 rounded-md shadow-md">
      <Canvas>
        <ambientLight />
        <directionalLight position={[0, 0, 0]} />
        <Blob speed={1} color1="#e37956" color2="#753ad3" />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default BlobExample;
