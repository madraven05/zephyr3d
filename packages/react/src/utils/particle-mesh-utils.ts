import { RefObject } from "react";
import {
  BufferAttribute,
  Points as ThreePoints,
  BufferGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  Object3DEventMap,
  PointsMaterial,
} from "three";

export const addPointsMesh = (
  vertices: Float32Array,
  groupRef: RefObject<Group<Object3DEventMap>>,
  childMesh: Mesh,
  size: number
) => {
  const pointMaterial = new PointsMaterial({
    size: size,
    vertexColors: false,
    color: (childMesh.material as MeshStandardMaterial).color,
    sizeAttenuation: true,
    depthWrite: false,
    
  });
  const buffGeom = new BufferGeometry();
  buffGeom.setAttribute("position", new BufferAttribute(vertices, 3));
  const pointsMesh = new ThreePoints(buffGeom, pointMaterial);
  pointsMesh.position.copy(childMesh.position);
  pointsMesh.rotation.copy(childMesh.rotation);
  pointsMesh.scale.copy(childMesh.scale);
  groupRef.current?.add(pointsMesh);
};

export const samplePointsFromVertices = (
  vertices: Float32Array,
  particlesCount: number
) => {
  // uniformly sample vertices
  const sampledVertices: number[] = [];
  var interval = Math.floor(vertices.length / 3 / particlesCount);
  if (interval === 0) interval = 1;

  for (let i = 0; i < vertices.length; i += interval * 3) {
    if (i < vertices.length - 3) {
      sampledVertices.push(vertices[i], vertices[i + 1], vertices[i + 2]);
    }
  }

  return new Float32Array(sampledVertices);
};

export const convertToParticleMesh = (
  meshGroup: Group,
  groupRef: RefObject<Group<Object3DEventMap>>,
  particlesCount: number,
  size: number
) => {
  meshGroup.children.forEach((child) => {
    if ((child as Group).isGroup) {
      convertToParticleMesh(child as Group, groupRef, particlesCount, size);
    } else if ((child as Mesh).isMesh) {
      const childMesh = child as Mesh;
      const vertices = childMesh.geometry.getAttribute("position")
        .array as Float32Array;

      const newVertices = samplePointsFromVertices(vertices, particlesCount);
      addPointsMesh(newVertices, groupRef, childMesh, size);
    }
  });
};
