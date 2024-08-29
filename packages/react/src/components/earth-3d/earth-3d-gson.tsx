import React, { useEffect, useState } from "react";
import { GSONMesh } from "./gson-mesh";
import { FeatureCollection } from "geojson";
import { Earth3D, Earth3DProps } from "./earth-3d";

export interface Earth3DGSONProps extends Earth3DProps {
  gsonPath?: string;
  meshColor?: string;
}

export const Earth3DGSON: React.FC<Earth3DGSONProps> = ({
  gsonPath = "",
  radius = 2,
  meshColor = "white"
}) => {
  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection>();

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
    return <>Loading...</>;
  }

  return (
    <group>
      <Earth3D radius={radius} withClouds />
      {geoJsonData.features.map((feature, idx) => (
        <GSONMesh key={idx} geometry={feature.geometry} radius={radius} color={meshColor} />
      ))}
    </group>
  );
};
