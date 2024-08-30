import React, { useEffect, useRef, useState } from "react";
import { GSONMesh } from "./gson-mesh";
import { FeatureCollection } from "geojson";
import { Earth3D, Earth3DProps } from "./earth-3d";
import { Html, Text } from "@react-three/drei";
import { ThreeEvent, useThree } from "@react-three/fiber";
import { Group, Mesh, Raycaster, Vector2, Vector3 } from "three";

export interface Earth3DGSONProps extends Earth3DProps {
  gsonPath?: string;
  meshColor?: string;
  legend?: boolean;
}

export const Earth3DGSON: React.FC<Earth3DGSONProps> = ({
  gsonPath = "",
  radius = 2,
  meshColor = "white",
  legend = true,
  withAxialTilt
}) => {
  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection>();
  const [isPointerOver, setIsPointerOver] = useState(false);
  const [textToShow, setTextToShow] = useState<string | null>(null);
  const [textPosition, setTextPosition] = useState<Vector3>(
    new Vector3(0, 0, 0)
  );

  const countriesRef = useRef<Group>(null);

  const { camera, scene } = useThree();

  const handleOnPointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    const raycaster = new Raycaster();
    const mouse = new Vector2();

    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerWidth) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(countriesRef.current!.children, true);
    // console.log(intersects);

    if(intersects.length > 0) {
      const intersectedObject = intersects[0].object;
      if(intersectedObject instanceof Mesh && intersectedObject.name.length != 0) {
        console.log(intersectedObject.name);
      }  
    } else {
      setTextToShow(null);
    }

  };

  const handleOnPointerLeave = () => {
    setIsPointerOver(false);
    document.body.style.cursor = "auto";
  };

  useEffect(() => {
    const fetchGeoJson = async () => {
      try {
        const response = await fetch(gsonPath);
        if (!response.ok) {
          throw new Error("Failed to fetch GeoJSON");
        }
        const data: FeatureCollection = await response.json();
        setGeoJsonData(data);
      } catch (error) {
        console.error("Error loading GeoJSON:", error);
      }
    };

    fetchGeoJson();
  }, []);

  if (!geoJsonData) {
    return <Html></Html>;
  }

  return (
    <group>
      <Earth3D radius={radius} withClouds />
      <group
      ref={countriesRef}
        onPointerEnter={handleOnPointerOver}
        onPointerLeave={handleOnPointerLeave}
      >
        {geoJsonData.features.map((feature, idx) => (
          <GSONMesh
            key={idx}
            feature={feature}
            radius={radius}
            color={meshColor}
            properties={feature.properties}
            hasAxialTilt={withAxialTilt}
          />
        ))}
        {isPointerOver ? (
          <Text
            position={textPosition}
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {textToShow}
          </Text>
        ) : null}
      </group>
      <Html position={[-10,0,10]}>
        <div>{textToShow}</div>
      </Html>
    </group>
  );
};
