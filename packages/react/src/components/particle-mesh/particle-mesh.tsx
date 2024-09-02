import { Group } from "three";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { convertToParticleMesh } from "../../utils/particle-mesh-utils";

export interface ParticleMeshProps {
  ModelComponent: React.FC;
  particlesCount?: number;
  size?: number;
  scale?: number;
  props?: JSX.IntrinsicElements["group"];
}

export const ParticleMesh: React.FC<ParticleMeshProps> = ({
  ModelComponent,
  particlesCount = 1000,
  size = 0.02,
  scale = 1,
  props,
}) => {
  const tempGroupRef = useRef<Group>(null);
  const groupRef = useRef<Group>(null);
  let metadata = { totalPoints: 0 };

  
  useEffect(() => {
    if (tempGroupRef.current) {
      const meshGroup = tempGroupRef.current;

      convertToParticleMesh(
        meshGroup,
        groupRef,
        particlesCount,
        size,
        metadata
      );
      console.log(metadata);
      tempGroupRef.current.remove();

    }
  }, [particlesCount, ModelComponent, size]);

  return (
    <>
      <group ref={tempGroupRef} visible={false}>
        <ModelComponent />
      </group>
      <group {...props} scale={scale} ref={groupRef} visible={true}></group>
    </>
  );
};
