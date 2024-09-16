import React, { forwardRef, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { fragmentShader, vertexShader } from "./shaders";

export interface BlobProps {
  noiseScale?: number;
  noiseIntensity?: number;
  color1?: string;
  color2?: string;
  lightPosition?: THREE.Vector3;
  ambientIntensity?: number;
  speed?: number;
  meshProps?: JSX.IntrinsicElements["mesh"];
  shaderProps?: JSX.IntrinsicElements["shaderMaterial"];
}

export const Blob = forwardRef<THREE.Mesh, BlobProps>(
  (
    {
      noiseScale = 2.0,
      noiseIntensity = 0.5,
      color1 = "orange",
      color2 = "purple",
      lightPosition = [2, 2, 2],
      ambientIntensity = 0.7,
      speed = 1,
      meshProps,
      shaderProps,
    },
    ref
  ) => {
    const materialRef = useRef<THREE.ShaderMaterial>(null!);

    const uniforms = useMemo(() => {
      return {
        time: {
          value: 0.0,
        },
        color1: {
          value: new THREE.Color(color1),
        },
        color2: {
          value: new THREE.Color(color2),
        },
        noiseScale: {
          value: noiseScale,
        },
        noiseIntensity: {
          value: noiseIntensity,
        },
        speed: {
          value: speed,
        },
        lightPosition: {
          value: lightPosition,
        },
        ambientIntensity: {
          value: ambientIntensity,
        },
      };
    }, []);

    // #region animation
    useFrame(({ clock }) => {
      if (materialRef.current) {
        materialRef.current.uniforms.time.value = clock.getElapsedTime();
      }
    });
    // #endregion

    return (
      <mesh ref={ref} {...meshProps}>
        <sphereGeometry args={[2, 32, 32]} />
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          {...shaderProps}
        />
      </mesh>
    );
  }
);
