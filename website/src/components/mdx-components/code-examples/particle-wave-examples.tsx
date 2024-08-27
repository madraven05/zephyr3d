import React from "react";
import {
  ParticlesWave,
  ParticlesWaveModel,
  circularMotionXZ,
} from "@zephyr3D/react";

export const SimpleParticleWave = () => {
  return (
    <div className="bg-white/10 rounded-md">
      <ParticlesWave>
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
      <ParticlesWave>
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

export const CustomWaveFunction = () => {
  const customWave = (
    x: number,
    y: number,
    z: number,
    duration: number
  ): [number, number, number] => {
    const time = performance.now() / duration;
    const amplitude = 1.5;
    const frequency = 3;
    const speed = 2;
    const phase = 0;

    const distance = Math.abs(x) + Math.abs(z);
    const newY =
      amplitude * Math.sin(frequency * distance - speed * time + phase);

    return [x, newY, z];
  };

  return (
    <div className="bg-white/10 rounded-md">
      <ParticlesWave>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <directionalLight position={[0, 0, 10]} intensity={1.5} />
        <ParticlesWaveModel
          startColor="#fff"
          endColor="#111"
          particlesCount={10000}
          waveFunction={customWave}
        />
      </ParticlesWave>
    </div>
  );
};