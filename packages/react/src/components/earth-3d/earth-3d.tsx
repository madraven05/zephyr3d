import React, { useEffect, useState } from "react";
import { GeoJsonGeometry } from "three-geojson-geometry";
import { BufferGeometryLoader, Mesh } from "three";
import { Canvas } from "@react-three/fiber";
import { GSONMesh } from "./gson-mesh";

import { OrbitControls } from "@react-three/drei";
import { FeatureCollection, GeoJSON } from "geojson";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export interface Earth3DProps {
  radius?: number
}

export const Earth3D: React.FC<Earth3DProps> = ({
  radius = 3
}) => {
  const [geoJsonData, setGeoJsonData] = useState<FeatureCollection>();

  useEffect(() => {
    const fetchGeoJson = async () => {
      try {
        const response = await fetch("/countries.geo.json");
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
    return <div className="absolute top-1/2 left-1/2 font-heading uppercase">Loading...</div>;
  }

  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
      {geoJsonData.features.map((feature, idx) => (
        <GSONMesh key={idx} geometry={feature.geometry} radius={radius}/>
      ))}
      <OrbitControls />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.3} // Controls which parts of the scene should glow
          luminanceSmoothing={0.9} // Smoothing between bright and dark areas
          intensity={1} // Controls the intensity of the bloom effect
          // blendMode={}
        />
      </EffectComposer>
    </Canvas>
  );
};
