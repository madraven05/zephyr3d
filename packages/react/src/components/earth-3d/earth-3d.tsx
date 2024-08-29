import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Earth3DMaterial } from "../../materials";

export interface Earth3DProps {
  radius?: number;
  normalMapPath?: string;
  specularMapPath?: string;
  baseMapPath?: string;
  cloudMapPath?: string;
  withClouds?: boolean;
}

const texturePathMap = {
  base: "/earth-3d-texture.jpg",
  cloud: "/earth-3d-cloud-map.jpg",
  normal: "/earth-3d-normal-map.png",
  specular: "/earth-3d-spec-map.png",
};

export const Earth3D: React.FC<Earth3DProps> = ({
  radius = 2,
  baseMapPath = texturePathMap["base"],
  normalMapPath = texturePathMap["normal"],
  specularMapPath = texturePathMap["specular"],
  cloudMapPath = texturePathMap["cloud"],
  withClouds = false,
}) => {
  const [baseTexture, normalMap, specularMap, cloudTexture] = useLoader(
    TextureLoader,
    [baseMapPath, normalMapPath, specularMapPath, cloudMapPath]
  );

  return (
    <mesh>
      <sphereGeometry args={[radius, 64, 64]} />
      <earth3DMaterial
        baseTexture={baseTexture}
        normalMap={normalMap}
        cloudTexture={withClouds ? cloudTexture : undefined}
      />
    </mesh>
  );
};
