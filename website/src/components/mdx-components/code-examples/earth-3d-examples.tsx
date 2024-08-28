import React from "react";
import { Earth3D, Earth3DGSON, ParticlesWaveModel } from "@zephyr3D/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


export const Earth3DExample = () => {
  return (
    <div className="bg-white/5 h-72 rounded-md">
      <Canvas>
        <ambientLight />
        <directionalLight intensity={1} position={[2, -2, 2]} />
        <Earth3D textureType={"base"} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export const Earth3DGSONExample = () => {
  return (
    <div className="bg-white/5 h-72 rounded-md">
      <Canvas>
        <ambientLight />
        <directionalLight position={[2, -2, 2]} />
        <Earth3DGSON gsonPath="/countries.geo.json"/>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
