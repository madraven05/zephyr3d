/**
 * Taken inspiration from https://github.com/jdomingu/ThreeGeoJSON/blob/master/lib/threeGeoJSON.js
 */

import { Vector2, Vector3 } from "three";

export function convertCoordsTo3D(
  [long, lat]: [number, number],
  radius: number
): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (long + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);

  return [x, y, z];
}

export function createCoordinateArray(coords: number[][]) {
  var tempArray = [];

  for (let pointIdx = 1; pointIdx < coords.length; pointIdx++) {
    var point1 = coords[pointIdx];
    var point2 = coords[pointIdx - 1];

    if (needsInterpolation(point2, point1)) {
      const interpolationArray = interpolatePoints([point2, point1]);
      tempArray.push(...interpolationArray);
    } else {
      tempArray.push(point1);
    }
  }

  return tempArray;
}

/**
 * This function is recursive. It will continue to add midpoints to the
 * interpolation array until needsInterpolation() returns false.
 */
export function interpolatePoints(interpolationArray: number[][]): number[][] {
  const tempArray: number[][] = [];
  let point1, point2;

  for (let pointIdx = 0; pointIdx < interpolationArray.length - 1; pointIdx++) {
    point1 = interpolationArray[pointIdx];
    point2 = interpolationArray[pointIdx + 1];

    tempArray.push(point1);
    if (needsInterpolation(point2, point1)) {
      tempArray.push(getMidpoint(point1, point2));
    }
  }

  tempArray.push(interpolationArray[interpolationArray.length - 1]);

  if (tempArray.length > interpolationArray.length) {
    return interpolatePoints(tempArray);
  } else {
    return tempArray;
  }
}

/**
 * If the distance between two latitude and longitude values is
 * greater than five degrees, return true.
 */
export function needsInterpolation(point2: number[], point1: number[]) {
  var lon1 = point1[0];
  var lat1 = point1[1];
  var lon2 = point2[0];
  var lat2 = point2[1];

  var lon_distance = Math.abs(lon1 - lon2);
  var lat_distance = Math.abs(lat1 - lat2);

  //   console.log(lon_distance, lat_distance);

  if (lon_distance > 0.2 || lat_distance > 0.2) {
    return true;
  } else {
    return false;
  }
}

export function getMidpoint(point1: number[], point2: number[]): any {
  var midpointLon = (point1[0] + point2[0]) / 2;
  var midpointLat = (point1[1] + point2[1]) / 2;
  var midpoint = [midpointLon, midpointLat];

  return midpoint;
}

export function createVertexForEachPoint(
  vertices: number[]
): Vector3[] | Vector2[] {
  const vector3Verts = [];
  for (let i = 0; i < vertices.length; i += 3) {
    if (i + 2 < vertices.length) {
      vector3Verts.push(
        new Vector3(vertices[i], vertices[i + 1], vertices[i + 2])
      );
    }
  }
  return vector3Verts;
}
