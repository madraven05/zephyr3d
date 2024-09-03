import React, { useEffect, useRef } from "react";
import { Group, Mesh } from "three";
import { useSpring } from "@react-spring/three";
import { ParticleMeshProps } from "../particle-mesh";
import {
} from "../../utils/particle-mesh-utils";
import { useFrame } from "@react-three/fiber";
import { lerp } from "three/src/math/MathUtils";

export interface MorphParticleMeshesProps {
  fromParticleMeshProps: ParticleMeshProps;
  toParticleMeshProps: ParticleMeshProps;
}

export const MorphParticleMeshes: React.FC<MorphParticleMeshesProps> = ({
  fromParticleMeshProps,
  toParticleMeshProps,
}) => {
  const tempFromGroupRef = useRef<Group>(null);
  const tempToGroupRef = useRef<Group>(null);

  const fromGroupRef = useRef<Group>(null);
  const toGroupRef = useRef<Group>(null);

  const FromComponent = fromParticleMeshProps.ModelComponent;
  const ToComponent = toParticleMeshProps.ModelComponent;

  //#region create the particle meshes for both the components
  useEffect(() => {
    if (tempFromGroupRef.current && tempToGroupRef.current) {
      const fromMeshGroup = tempFromGroupRef.current;
      const toMeshGroup = tempToGroupRef.current;


    //   convertToParticleMesh(
    //     fromMeshGroup,
    //     fromGroupRef,
    //     fromParticleMeshProps.particlesCount!,
    //     fromParticleMeshProps.size!,
    //   );

    //   convertToParticleMesh(
    //     toMeshGroup,
    //     toGroupRef,
    //     toParticleMeshProps.particlesCount!,
    //     toParticleMeshProps.size!,
    //   );


      tempFromGroupRef.current.remove();
    }
  }, []);
  //#endregion

  //#region animate
  const { morphFactor } = useSpring({
    morphFactor: 1,
    from: { morphFactor: 0 },
    config: { duration: 2000 },
  });

  useFrame(({ clock }) => {
    const t = 0.005;
    if (fromGroupRef.current && toGroupRef.current) {
      fromGroupRef.current.children.forEach((child, index) => {
        const target = toGroupRef.current?.children[index] as Mesh;
        const childMesh = child as Mesh;
        const fromPosArr = childMesh.geometry.attributes.position
          .array as Float32Array;
        const toPosArr = target.geometry.attributes.position
          .array as Float32Array;

        const length = Math.min(fromPosArr.length, toPosArr.length);

        for (let i = 0; i < length; i++) {
          fromPosArr[i] = lerp(fromPosArr[i], toPosArr[i], t);
          fromPosArr[i + 1] = lerp(fromPosArr[i + 1], toPosArr[i + 1], t);
          fromPosArr[i + 2] = lerp(fromPosArr[i + 2], toPosArr[i + 2], t);
        }

        if (toParticleMeshProps.props && 
            Array.isArray(toParticleMeshProps.props.position) &&
            toParticleMeshProps.props.position.length === 3) {
            fromGroupRef.current!.position.set(
              toParticleMeshProps.props.position[0],
              toParticleMeshProps.props.position[1],
              toParticleMeshProps.props.position[2]
            );
          }
          if (toParticleMeshProps.props && 
            Array.isArray(toParticleMeshProps.props.scale) &&
            toParticleMeshProps.props.scale.length === 3) {
            fromGroupRef.current!.scale.set(
              toParticleMeshProps.props.scale[0],
              toParticleMeshProps.props.scale[1],
              toParticleMeshProps.props.scale[2]
            );
          }

        childMesh.geometry.attributes.position.needsUpdate = true;
      });
      //   fromGroupRef.current.props
      
    }
  });
  //#endregion
  return (
    <>
      <group ref={tempFromGroupRef} visible={false}>
        <FromComponent />
      </group>
      <group ref={tempToGroupRef} visible={false}>
        <ToComponent />
      </group>

      <group {...fromParticleMeshProps!.props} ref={fromGroupRef}></group>
      <group {...toParticleMeshProps!.props} visible={false} ref={toGroupRef}></group>
    </>
  );
};
