import React, { useEffect, useMemo, useRef, useState } from "react";
import { ParticleMesh, ParticleMeshProps } from "../particle-mesh";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

export interface MorphParticleMeshesProps {
  particlesCount: number;
  color?: string;
  fromProps: ParticleMeshProps;
  toProps: ParticleMeshProps;
  timeout?: number;
}

export const MorphParticleMeshes: React.FC<MorphParticleMeshesProps> = ({
  particlesCount = 1000,
  color = "yellow",
  fromProps,
  toProps,
  timeout = 2000,
}) => {
  const fromRef = useRef<THREE.Group>(null);
  const toRef = useRef<THREE.Group>(null);


  const [isMorphing, setIsMorphing] = useState(false);

  // update from and to props
  toProps = {
    ...toProps,
    particlesCount: particlesCount,
    color: color,
    props: { ...toProps.props, visible: false },
  };

  fromProps = {
    ...fromProps,
    color: color,
    particlesCount: particlesCount,
  };

  let pu = useMemo(
    () => ({
      morphValue: { value: 0.0 },
    }),
    []
  );

  useEffect(() => {
    if (fromRef.current && toRef.current) {
      const fromPointsMesh = fromRef.current.children[0] as THREE.Points;
      const fromPositions = fromPointsMesh.geometry.attributes.position
        .array as Float32Array;

      const toPointsMesh = toRef.current.children[0] as THREE.Points;
      const toPositions = toPointsMesh.geometry.attributes.position
        .array as Float32Array;

      fromPointsMesh.geometry.setAttribute(
        "positionStart",
        new THREE.BufferAttribute(fromPositions, 3)
      );

      fromPointsMesh.geometry.setAttribute(
        "positionTarget",
        new THREE.BufferAttribute(toPositions, 3)
      );

      fromPointsMesh.geometry.setAttribute(
        "rotDir",
        new THREE.Float32BufferAttribute(
          new Array(particlesCount)
            .fill(0)
            .map(() => (Math.random() < 0.5 ? -1 : 1)),
          1
        )
      );

      const material = fromPointsMesh.material as THREE.PointsMaterial;

      material.onBeforeCompile = (shader) => {
        shader.uniforms.morphValue = pu.morphValue;
        shader.vertexShader = `
          uniform float morphValue;
          attribute vec3 positionStart;
          attribute vec3 positionTarget;
          attribute float rotDir;
          
          mat2 rot2d(float a){ return mat2(cos(a), sin(a), -sin(a), cos(a));}
          ${shader.vertexShader}
        `.replace(
          `#include <begin_vertex>`,
          `#include <begin_vertex>
          
            vec3 pStart = positionStart;
            vec3 pEnd = positionTarget;
            
            float distRatio = sin(morphValue * PI);
            
            vec3 pos = mix(pStart, pEnd, morphValue);
            transformed = pos + normalize(pos) * distRatio * 2.5;
            
          `
        );
      };
      toRef.current.remove();

      setTimeout(() => setIsMorphing(true), timeout);
    }
  }, []);

  let t = 0;
  // update target positions
  useFrame(({ clock }) => {
    t += 0.016;
    if (isMorphing) {
      if (pu.morphValue.value >= 1) {
        setIsMorphing(false);
      }
      pu.morphValue.value = Math.sin(t * 0.08) + 0.0001;
    }
  });

  return (
    <>
      <ParticleMesh ref={fromRef} {...fromProps} />
      <ParticleMesh ref={toRef} {...toProps} />
    </>
  );
};
