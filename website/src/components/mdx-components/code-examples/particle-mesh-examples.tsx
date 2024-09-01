import { Canvas } from "@react-three/fiber";
import React from "react";
import { ParticleMesh } from "@zephyr3D/react";
import { NikeAirJordan } from "@/components/NikeAirJordan";
import { OrbitControls } from "@react-three/drei";

const ParticleMeshExample = () => {
  return (
    <div className="bg-black/10 dark:bg-white/10 rounded-lg shadow-sm h-80">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <NikeAirJordan position={[2, 0, 0]} />
        <ParticleMesh
          props={{ position: [-2, 0, 0] }}
          scale={15}
          particlesCount={800}
          size={0.04}
          ModelComponent={NikeAirJordan}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ParticleMeshExample;
