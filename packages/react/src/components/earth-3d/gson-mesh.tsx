import React, { useMemo, useRef, useState } from "react";
import { Object3D, Vector3 } from "three";
import { Line as MeshBoundary } from "@react-three/drei";
import { Feature, GeoJsonProperties } from "geojson";
import {
  convertCoordsTo3D,
  createCoordinateArray,
  isMeshVisible,
} from "../../utils/earth-3d-utils";
import { axialRotationY } from "./earth-3d";
import { ThreeEvent, useThree } from "@react-three/fiber";
import { Line2 } from "three/examples/jsm/lines/Line2";

export interface GSONMeshProps {
  feature: Feature;
  properties?: GeoJsonProperties;
  radius?: number;
  color?: string;
  lineWidth?: number;
  hasAxialTilt?: boolean;
}

export const GSONMesh: React.FC<GSONMeshProps> = ({
  feature,
  radius = 2,
  color = "white",
  lineWidth = 1.2,
  hasAxialTilt = true,
}) => {
  const { geometry, properties } = feature;

  const [isPointerOver, setIsPointerOver] = useState(false);
  const lineRef = useRef<Line2>(null);

  const { camera, scene, gl } = useThree();

  //#region Creating a list of vertices from GSON data
  const countryGeom = useMemo(() => {
    const vertices: number[] = [];

    switch (geometry.type) {
      case "MultiPolygon":
        geometry.coordinates.forEach((polygon) => {
          polygon.forEach((segment) => {
            var coordinateArray = createCoordinateArray(segment);
            coordinateArray.forEach((coords) => {
              const [x, y, z] = convertCoordsTo3D(
                coords as [number, number],
                radius
              );
              vertices.push(x, y, z);
            });
          });
        });
        break;
      case "Polygon":
        geometry.coordinates.forEach((segment) => {
          var coordinateArray = createCoordinateArray(segment);
          coordinateArray.forEach((coords) => {
            const [x, y, z] = convertCoordsTo3D(
              coords as [number, number],
              radius
            );
            vertices.push(x, y, z);
          });
        });

      default:
        break;
    }

    const numVertices = vertices.length / 3;

    // Calculate the centroid of the polygon
    const centroid = vertices
      .reduce(
        (acc, value, index) => {
          const axisIndex = index % 3;
          acc[axisIndex] += value;
          return acc;
        },
        [0, 0, 0]
      )
      .map((coord) => coord / numVertices);

    return { vertices, centroid };
  }, [geometry]);
  //#endregion

  //#region Pointer Event Functions
  const handleOnPointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();

    const centroidWorldPos = new Vector3(...countryGeom.centroid);
    const transformedCentroid = centroidWorldPos.applyMatrix4(
      lineRef.current!.matrixWorld
    );


    if (isMeshVisible(transformedCentroid, camera, radius)) {
      console.log(properties!["name"]);
    }

    setIsPointerOver(true);
  };

  const handleOnPointerLeave = (e: ThreeEvent<PointerEvent>) => {
    setIsPointerOver(false);
  };
  //#endregion

  return (
    <MeshBoundary
      ref={lineRef}
      onPointerOver={handleOnPointerOver}
      onPointerLeave={handleOnPointerLeave}
      name={properties!["name"]}
      points={countryGeom.vertices}
      color={color}
      lineWidth={lineWidth}
      rotation={hasAxialTilt ? [0, axialRotationY, 0] : [0, 0, 0]}
    />
  );
};
