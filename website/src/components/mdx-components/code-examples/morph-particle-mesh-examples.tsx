import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MorphParticleMeshes } from "@zephyr3D/react";
import { WolfHP } from "@/components/wolf-hp";
import { GuitarSG } from "@/components/guitar-sg";


const MorphParticleMeshesExamples = () => {
  return (
    <div className="bg-white/5 rounded-lg shadow-md h-96">
      <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight />
        <MorphParticleMeshes
          particlesCount={5000}
          toProps={{
            scale: 2,
            ModelComponent: WolfHP,
            size: 0.02,
            props: {
            },
          }}
          fromProps={{
            ModelComponent: GuitarSG,
            size: 0.02,
            scale: 2,
            props: {
              rotation: [0,Math.PI/2,0],
            },
          }}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default MorphParticleMeshesExamples;
