import {
  ParticlesWave,
  ParticlesWaveModel,
  circularMotionXZ,
} from "@zephyr3D/react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { MeshPhongMaterial } from "three";
import React, { useContext, useState } from "react";
import { ZephyrContext, ZephyrProvider } from "./zephyr-context";

const Hero = () => {
  const material = new MeshPhongMaterial({ vertexColors: false });

  const zephyrContext = useContext(ZephyrContext);

  const customWaveFunction = (
    x: number,
    y: number,
    z: number,
    time: number
  ): [number, number, number] => {
    return [x, y, z];
  };

  return (
    <section className="flex w-full flex-grow flex-col justify-center items-center">
      <ParticlesWave className=" w-full h-screen">
        <ambientLight intensity={1} /> {/* Increased intensity */}
        <pointLight position={[10, 10, 10]} intensity={2} />
        <directionalLight position={[0, 0, 10]} intensity={1.5} />
        <ParticlesWaveModel
          particlesCount={5000}
          material={material}
          xLength={24}
          zLength={2}
          yLength={4}
          startColor="#c08ff4"
          endColor="#efa26b"
          waveFunction={circularMotionXZ}
        />
        {zephyrContext?.isDarkModeEnabled ? (
          <EffectComposer>
            <Bloom
              luminanceThreshold={0} // Controls which parts of the scene should glow
              luminanceSmoothing={0} // Smoothing between bright and dark areas
              intensity={4.5} // Controls the intensity of the bloom effect
              // blendMode={}
            />
          </EffectComposer>
        ) : null}
      </ParticlesWave>
      <div className="absolute p-10 gap-4 text-center flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-5xl">Zephyr3D</h1>
        <div>
        <p className="font-semibold">
          A 3D component library made using React Three Fiber, Tailwind and
          React Spring
        </p>
        <p className="text-sm">Best experienced in Dark mode!</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
