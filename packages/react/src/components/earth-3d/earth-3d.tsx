import React, { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import {
  Group,
  Mesh,
  MeshPhongMaterial,
  TextureLoader,
  Vector3,
} from "three";

export interface Earth3DProps {
  radius?: number;
  bumpMapPath?: string;
  specularMapPath?: string;
  baseMapPath?: string;
  cloudMapPath?: string;
  cloudTransPath?: string;
  nightTexturePath?: string;
  withClouds?: boolean;
  withAxialTilt?: boolean;
  withAnimations?: boolean;
}

const texturePathMap = {
  base: "/earth-3d-texture.jpg",
  cloudTrans: "/earth-3d-cloud-transparency-map.jpg",
  cloud: "/earth-3d-cloud-map.jpg",
  bump: "/earth-3d-bump-map.jpg",
  specular: "/earth-3d-specular-map.jpg",
  night: "/earth-3d-night-texture.jpg",
};

export const axialRotationY = 23.44 * Math.PI/180;

export const Earth3D: React.FC<Earth3DProps> = ({
  radius = 2,
  baseMapPath = texturePathMap["base"],
  bumpMapPath = texturePathMap["bump"],
  specularMapPath = texturePathMap["specular"],
  cloudTransPath = texturePathMap["cloudTrans"],
  cloudMapPath = texturePathMap["cloud"],
  nightTexturePath = texturePathMap["night"],
  withClouds = false,
  withAxialTilt = true,
  withAnimations = false
}) => {
  const [
    baseTexture,
    bumpMap,
    specularMap,
    cloudTexture,
    cloudTransMap,
    nightTexture,
  ] = useLoader(TextureLoader, [
    baseMapPath,
    bumpMapPath,
    specularMapPath,
    cloudMapPath,
    cloudTransPath,
    nightTexturePath,
  ]);

  const earthRef = useRef<Mesh>(null);
  const cloudsRef = useRef<Mesh>(null);


  
  //#region Loading Materials
  const baseMat = useMemo(() => {
    const material = new MeshPhongMaterial({
      map: baseTexture,
      specularMap: specularMap,
      bumpMap: bumpMap,
      bumpScale: 0.2,
    });

    material.onBeforeCompile = (shader) => {
      shader.uniforms.nightTexture = { value: nightTexture };

      shader.vertexShader = `
        varying vec2 vUv;
        ${shader.vertexShader}
      `.replace(
        `#include <uv_vertex>`,
        `
        #include <uv_vertex>
        vUv = uv;
        `
      );

      shader.fragmentShader = `
        uniform sampler2D nightTexture;
        varying vec2 vUv;
        ${shader.fragmentShader}
      `.replace(
        `#include <map_fragment>`,
        `
        vec4 dayColor = texture2D( map, vUv );
        vec4 nightColor = texture2D( nightTexture, vUv );

        // Calculate the intensity of the light based on the dot product of the normal and light direction
        vec3 lightDir = normalize(vec3(0.0, 0.0, 1.0)); // Assuming light is coming from +Z direction
        float lightIntensity = dot(normalize(vNormal), lightDir);

        // Clamp the light intensity to [0, 1] range
        lightIntensity = clamp(lightIntensity, 0.0, 1.0);

        // Mix day and night colors based on light intensity
        vec4 texelColor = mix(nightColor, dayColor, lightIntensity);

        diffuseColor = texelColor;
        `
      );
    };

    return material;
  }, [baseTexture, nightTexture, bumpMap]);

  const cloudsMat = useMemo(
    () =>
      new MeshPhongMaterial({
        alphaMap: cloudTransMap,
        // alphaMap: cloudTransMap,
        transparent: true,
        opacity: 1,
        // blending: SubtractiveBlending
      }),
    [cloudTexture]
  );
  //#endregion
  
  //#region Rotation Animation using useFrame()
  useFrame(() => {
    if(withAnimations) {
      if(earthRef.current !== null) {
        earthRef.current.rotation.y += 0.001;
      }
      if(cloudsRef.current !== null) {
        cloudsRef.current.rotation.y += 0.0015;
      }
    }
    // if(earthRef.current !== null) {
    //   const meshWorldPos = new Vector3();
    //   earthRef.current.getWorldPosition(meshWorldPos);
    //   console.log(meshWorldPos);
    // }
  })
  //#endregion

  

  return (
    <group position={[0,0,0]} rotation={ withAxialTilt ? [0, axialRotationY, 0] : [0,0,0]}>
      <mesh material={baseMat} ref={earthRef}>
        <sphereGeometry args={[radius, 64, 64]} />
      </mesh>

      {withClouds ? (
        <mesh material={cloudsMat} ref={cloudsRef}>
          <sphereGeometry args={[radius + 0.02, 64, 64]} />
        </mesh>
      ) : null}
    </group>
  );
};
