import { Canvas } from "@react-three/fiber";
import React from "react";
import { ParticleMesh } from "@zephyr3D/react";
import { NikeAirJordan } from "@/components/NikeAirJordan";
import { OrbitControls } from "@react-three/drei";
import { Guitar } from "@/components/guitar";
import { ConverseHT } from "@/components/ConverseHT";
import { WolfHP } from "@/components/wolf-hp";
import { WolfLP } from "@/components/wolf-lp";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const ParticleMeshExample = () => {
  return (
    <div className="bg-black/10 dark:bg-white/10 rounded-lg shadow-sm h-80">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <ParticleMesh
          props={{ position: [0, 0, 0] }}
          scale={15}
          particlesCount={1000}
          size={0.01}
          ModelComponent={NikeAirJordan}
        />
        <OrbitControls />
        <EffectComposer>
            <Bloom
              luminanceThreshold={0} // Controls which parts of the scene should glow
              luminanceSmoothing={0} // Smoothing between bright and dark areas
              intensity={1.5} // Controls the intensity of the bloom effect
              // blendMode={}
            />
          </EffectComposer>
      </Canvas>
    </div>
  );
};

export default ParticleMeshExample;
