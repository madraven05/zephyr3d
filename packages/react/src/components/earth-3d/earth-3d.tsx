import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export interface Earth3DProps {
  radius?: number;
  normalMapPath?: string;
  specularMapPath?: string;
  baseMapPath?: string;
}

const texturePathMap = {
  base: "/earth-3d-texture.jpg",
  normal: "/earth-3d-normal-map.png",
  specular: "/earth-3d-spec-map.png",
};

export const Earth3D: React.FC<Earth3DProps> = ({
  radius = 2,
  baseMapPath = texturePathMap["base"],
  normalMapPath = texturePathMap["normal"],
  specularMapPath = texturePathMap["specular"],
}) => {
  const [baseMap, normalMap, specularMap] = useLoader(TextureLoader, [
    baseMapPath,
    normalMapPath,
    specularMapPath,
  ]);

  return (
    <mesh>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshPhongMaterial
        map={baseMap}
        normalMap={normalMap}
        specularMap={specularMap}
      />
    </mesh>
  );
};
