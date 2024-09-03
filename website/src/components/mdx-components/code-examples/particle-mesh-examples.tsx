import { Canvas } from "@react-three/fiber";
import React from "react";
import { ParticleMesh } from "@zephyr3D/react";
import { OrbitControls } from "@react-three/drei";
import { WolfHP } from "@/components/wolf-hp";

const ParticleMeshExample = () => {
  return (
    <div className="bg-black/10 dark:bg-white/10 rounded-lg shadow-sm h-80">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <ParticleMesh
          color="#f3ad4b"
          scale={3}
          props={{ position: [-2, 0, 0] }}
          particlesCount={2000}
          size={0.02}
          ModelComponent={WolfHP}
        />
        <WolfHP scale={1.5} position={[2,0,0]}/>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ParticleMeshExample;
