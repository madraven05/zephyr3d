import { BufferGeometry, Group } from "three";
import React, { forwardRef, useEffect, useRef } from "react";
import {
  getAllMeshGeometries,
  samplePointsOnGeometry,
} from "../../utils/particle-mesh-utils";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import * as THREE from "three";

export interface ParticleMeshProps {
  ModelComponent: React.FC;
  particlesCount?: number;
  size?: number;
  color?: string;
  scale?: number;
  props?: JSX.IntrinsicElements["points"];
}

export const ParticleMesh = forwardRef<THREE.Group, ParticleMeshProps>(
  (
    {
      ModelComponent,
      particlesCount = 1000,
      size = 0.02,
      color = "white",
      scale = 1,
      props,
    },
    ref
  ) => {
    const tempGroupRef = useRef<Group>(null);
    const pointsRef = useRef<THREE.Points>(null);

    useEffect(() => {
      if (tempGroupRef.current) {
        const meshGroup = tempGroupRef.current;
        const geometries: BufferGeometry[] = [];

        // Get all mesh geometries
        getAllMeshGeometries(meshGroup, geometries);

        // merge all geometries
        const mergedGeometry = new BufferGeometry();
        mergedGeometry.copy(
          mergeGeometries(geometries).center().scale(scale, scale, scale)
        );

        if (mergedGeometry) {
          // sample points on the merged geometry
          const points = samplePointsOnGeometry(mergedGeometry, particlesCount);

          pointsRef.current!.geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(points, 3)
          );
        }
      } else {
        console.log("Issue with merging geometries!");
      }
      tempGroupRef.current!.remove();
    }, [particlesCount, ModelComponent, size]);

    return (
      <>
        <group ref={tempGroupRef} visible={false}>
          <ModelComponent />
        </group>

        <group ref={ref}>
          <points {...props} scale={scale} ref={pointsRef}>
            <bufferGeometry />
            <pointsMaterial color={color} size={size} />
          </points>
        </group>
      </>
    );
  }
);
