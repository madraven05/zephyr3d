import React, { useEffect, useRef, useState } from "react";
import { GSONMesh } from "./gson-mesh";
import { FeatureCollection } from "geojson";
import { Earth3D, Earth3DProps } from "./earth-3d";
import { Html, Text } from "@react-three/drei";
import { Group, Vector3 } from "three";

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
  withAxialTilt,
}) => {
  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection>();
  const [isPointerOver, setIsPointerOver] = useState(false);
  const [textToShow, setTextToShow] = useState<string | null>(null);
  const [textPosition, setTextPosition] = useState<Vector3>(
    new Vector3(0, 0, 0)
  );

  
  const countriesRef = useRef<Group>(null);

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
      <group ref={countriesRef}>
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
    </group>
  );
};
