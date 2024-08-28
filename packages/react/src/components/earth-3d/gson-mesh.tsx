import React, { useMemo } from "react";
import { BufferGeometry, PointsMaterial } from "three";
import { GeometryObject } from "geojson";
import {
  convertCoordsTo3D,
  createCoordinateArray,
  createVertexForEachPoint,
} from "../../utils/earth-3d-utils";

export interface CountryMeshProps {
  geometry: GeometryObject;
  radius: number;
}

export const GSONMesh: React.FC<CountryMeshProps> = ({
  geometry,
  radius,
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

    return geom;
  }, [geometry]);

  const material = new PointsMaterial({ color: "white" });

  return <lineSegments geometry={countryGeom} material={material} />;
};
