import { Canvas, useFrame } from "@react-three/fiber";
import React, { HTMLAttributes, ReactNode, useMemo, useRef } from "react";
import { OrbitControls } from "@react-three/drei";

import {
  Color,
  InstancedMesh,
  Material,
  MeshStandardMaterial,
  Object3D,
  SphereGeometry,
} from "three";
import { sineWaveXZ } from "../../utils/particle-wave-helper";
import { lerp } from "three/src/math/MathUtils";

//#region model
export interface ParticlesWaveModelProps {
  particlesCount?: number;
  particleColor?: string;
  xLength?: number;
  yLength?: number;
  zLength?: number;
  waveFunction?: (
    particle: number[],
    duration: number
  ) => [number, number, number];
  duration?: number;
  material?: Material;
  startColor?: string;
  endColor?: string;
}

export const ParticlesWaveModel: React.FC<ParticlesWaveModelProps> = ({
  particlesCount = 500,
  particleColor = "#32e7e7",
  xLength = 14,
  yLength = 14,
  zLength = 4,
  duration = 1000,
  material = new MeshStandardMaterial({ color: particleColor }),
  startColor = "#7439e2",
  endColor = "#ce9082",
  waveFunction = sineWaveXZ,
}) => {
  const meshRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  //   const material = new MeshStandardMaterial({ color: particleColor });

  const particles = useMemo(() => {
    const particlesArray = [];
    for (let i = 0; i < particlesCount; i++) {
      particlesArray.push([
        Math.random() * xLength - xLength / 2,
        Math.random() * yLength - yLength / 2,
        Math.random() * zLength - zLength / 2,
      ]);
    }
    return particlesArray;
  }, [particlesCount, xLength, yLength, zLength]);

  const colors = useMemo(() => {
    const colorsArray = new Float32Array(particlesCount * 3);
    const colA = new Color(startColor);
    const colB = new Color(endColor);

    for (let i = 0; i < particlesCount; i++) {
      const r = lerp(colA.r, colB.r, (i + 1) / particlesCount);
      const g = lerp(colA.g, colB.g, (i + 1) / particlesCount);
      const b = lerp(colA.b, colB.b, (i + 1) / particlesCount);

      //   const color = new Color(r,g,b);
      //   console.log(color)
      colorsArray[i * 3] = r;
      colorsArray[i * 3 + 1] = g;
      colorsArray[i * 3 + 2] = b;
    }
    return colorsArray;
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
      args={[new SphereGeometry(0.02, 4, 4), material, particlesCount]}
    >
      <instancedBufferAttribute
        attach="instanceColor"
        itemSize={3}
        array={colors}
        count={particlesCount}
      />
    </instancedMesh>
  );
};
//#endregion

//#region canvas
export interface ParticlesWaveProps extends HTMLAttributes<HTMLDivElement> {
  orbitControls?: boolean;
  children: ReactNode;
}

export const ParticlesWave: React.FC<ParticlesWaveProps> = ({
  orbitControls = false,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <Canvas>
        {children}
        {orbitControls ? <OrbitControls /> : null}
      </Canvas>
    </div>
  );
};
//#endregion
