import { BufferGeometry, Group, Mesh, Vector3 } from "three";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler";

export const samplePointsOnGeometry = (
  mergedGeometry: BufferGeometry,
  particlesCount: number
) => {
  const mesh = new Mesh(mergedGeometry);
  const sampler = new MeshSurfaceSampler(mesh).setWeightAttribute(null).build();

  const points = [];
  const tempPosition = new Vector3();

  for (let i = 0; i < particlesCount; i++) {
    sampler.sample(tempPosition);
    points.push(tempPosition.x, tempPosition.y, tempPosition.z);
  }

  return new Float32Array(points);
};

export const getAllMeshGeometries = (
  meshGroup: Group,

  geometries: BufferGeometry[]
) => {
  meshGroup.children.forEach((child) => {
    if ((child as Group).isGroup) {
      getAllMeshGeometries(child as Group, geometries);
    } else if ((child as Mesh).isMesh) {
      const childMesh = child as Mesh;

      const geometry = childMesh.geometry
        .clone()
        .applyMatrix4(childMesh.matrixWorld);

      // Convert to non-indexed geometry if indexed
      const nonIndexedGeometry = geometry.index
        ? geometry.toNonIndexed()
        : geometry;

      // Remove unwanted attributes
      for (const key in nonIndexedGeometry.attributes) {
        if (key !== "position") {
          nonIndexedGeometry.deleteAttribute(key);
        }
      }

      geometries.push(nonIndexedGeometry);
    }
  });
};
