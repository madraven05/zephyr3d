import React from "react";
import {
  ParticlesWave,
  ParticlesWaveModel,
  circularMotionXZ,
} from "@zephyr3D/react";

export const SimpleParticleWave = () => {
  return (
    <div className="bg-white/10 rounded-md">
      <ParticlesWave className="">
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <directionalLight position={[0, 0, 10]} intensity={1.5} />
        <ParticlesWaveModel
          startColor="#fff"
          endColor="#111"
          particlesCount={5000}
        />
      </ParticlesWave>
    </div>
  );
};

export const CircularParticleWave = () => {
  return (
    <div className="bg-white/10 rounded-md">
      <ParticlesWave className="">
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <directionalLight position={[0, 0, 10]} intensity={1.5} />
        <ParticlesWaveModel
          startColor="#fff"
          endColor="#111"
          particlesCount={5000}
          waveFunction={circularMotionXZ}
        />
      </ParticlesWave>
    </div>
  );
};

