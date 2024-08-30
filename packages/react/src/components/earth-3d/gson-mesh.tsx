import React, { useMemo, useState } from "react";
import { BufferGeometry, PointsMaterial, Vector3 } from "three";
import { Html, Line, Text } from "@react-three/drei";
import {
  GeometryObject,
  GeometryCollection,
  FeatureCollection,
  Feature,
  GeoJsonProperties,
} from "geojson";
import {
  convertCoordsTo3D,
  createCoordinateArray,
  createVertexForEachPoint,
} from "../../utils/earth-3d-utils";

export interface GSONMeshProps {
  feature: Feature;
  properties?: GeoJsonProperties;
  radius?: number;
  color?: string;
  lineWidth?: number;
  hasAxialTilt?: boolean
}

export const GSONMesh: React.FC<GSONMeshProps> = ({
  feature,
  radius = 2,
  color = "white",
  lineWidth = 1.2,
  hasAxialTilt = true
}) => {
  const { geometry, properties } = feature;

  const [isPointerOver, setIsPointerOver] = useState(false);

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

  return (
    <Line
      name={properties!["name"]}
      points={countryGeom.vertices}
      color={color}
      lineWidth={lineWidth}
      rotation={hasAxialTilt ? [0,23.44 * Math.PI/180, 0] : [0,0,0]}
    />
  );
};
