import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MorphParticleMeshes } from "@zephyr3D/react";
import { NikeAirJordan } from "@/components/NikeAirJordan";
import { WolfLP } from "@/components/wolf-lp";
import { Guitar } from "@/components/guitar";
import { ConverseHT } from "@/components/ConverseHT";

const MorphParticleMeshesExamples = () => {
  return (
    <div className="bg-white/5 h-96">
      <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight />
        <MorphParticleMeshes
          fromParticleMeshProps={{
            ModelComponent: WolfLP,
            size: 0.1,
            particlesCount: 1000,
            props: {
                scale: 0.3
            }
          }}
          toParticleMeshProps={{
            ModelComponent: ConverseHT,
            size: 0.2,
            particlesCount: 1000,
            props: {
                position: [0,0,0],
                scale: 200
            }
          }}
        />
        <OrbitControls/>
      </Canvas>
    </div>
  );
};

export default MorphParticleMeshesExamples;
