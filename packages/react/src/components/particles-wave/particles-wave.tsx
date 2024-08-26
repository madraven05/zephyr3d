import { Canvas, useFrame } from "@react-three/fiber";
import React, { HTMLAttributes, useMemo, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import {
  InstancedMesh,
  MeshStandardMaterial,
  Object3D,
  SphereGeometry,
} from "three";
import { circularMotionYZ, sineWaveXZ } from "../../utils/particle-wave-helper";

//#region model
export interface ParticlesWaveModelProps {
  particlesCount?: number;
  particleColor?: string;
  xLength?: number;
  zLength?: number;
  waveFunction?: (
    particle: number[],
    duration: number
  ) => [number, number, number];
  duration?: number
}

export const ParticlesWaveModel: React.FC<ParticlesWaveModelProps> = ({
  particlesCount = 500,
  particleColor = "#32e7e7",
  xLength = 14,
  zLength = 4,
  duration = 1000,
  waveFunction = sineWaveXZ
}) => {
  const meshRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  const particles = useMemo(() => {
    const particlesArray = [];
    for (let i = 0; i < particlesCount; i++) {
      particlesArray.push([
        Math.random() * xLength - 2,
        Math.random() * 14 - 2,
        Math.random() * zLength - 2,
      ]);
    }
    return particlesArray;
  }, [particlesCount]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      const [newX, newY, newZ] = waveFunction(particle, duration);
      dummy.position.set(newX, newY, newZ);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current!.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[
        new SphereGeometry(0.1, 3, 3),
        new MeshStandardMaterial({ color: particleColor }),
        particlesCount,
      ]}
    />
  );
};
//#endregion

//#region canvas
export interface ParticlesWaveProps extends HTMLAttributes<HTMLDivElement> {
  orbitControls?: boolean;
}

export const ParticlesWave: React.FC<ParticlesWaveProps> = ({
  orbitControls = false,
  ...props
}) => {
  return (
    <div {...props}>
      <Canvas>
        <ambientLight />
        <ParticlesWaveModel waveFunction={circularMotionYZ}/>
        {orbitControls ? <OrbitControls /> : null}
      </Canvas>
    </div>
  );
};
//#endregion
