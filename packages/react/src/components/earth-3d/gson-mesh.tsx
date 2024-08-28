import React, { useMemo } from "react";
import { BufferGeometry, PointsMaterial } from "three";
import { Line } from "@react-three/drei";
import { GeometryObject } from "geojson";
import {
  convertCoordsTo3D,
  createCoordinateArray,
  createVertexForEachPoint,
} from "../../utils/earth-3d-utils";

export interface GSONMeshProps {
  geometry: GeometryObject;
  radius: number;
  color?: string;
  lineWidth?: number;
}

export const GSONMesh: React.FC<GSONMeshProps> = ({
  geometry,
  radius,
  color = "white",
  lineWidth = 1.2
}) => {
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

    const geom = new BufferGeometry().setFromPoints(
      createVertexForEachPoint(vertices)
    );

    return vertices;
  }, [geometry]);

  return <Line points={countryGeom} color={color} lineWidth={lineWidth} />;
};
