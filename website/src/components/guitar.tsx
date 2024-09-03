/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 scene.gltf -t -o guitar.tsx 
Author: Skabl (https://sketchfab.com/skabl_yt)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/electric-guitar-explorer-a7ffc570d3fe41c89b9dde195ab0faea
Title: Electric Guitar Explorer
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    corpuse_low_Guitar_0: THREE.Mesh
    corpuse_1_low_Guitar_0: THREE.Mesh
    bridge_low_Guitar_0: THREE.Mesh
    hamb_low_Guitar_0: THREE.Mesh
    hamb1_low_Guitar_0: THREE.Mesh
    hamb2_low_Guitar_0: THREE.Mesh
    hamb3_low_Guitar_0: THREE.Mesh
    grif_low_Guitar_0: THREE.Mesh
    strings_low_Guitar_0: THREE.Mesh
    kolki_low_Guitar_0: THREE.Mesh
    kolki_1_low_Guitar_0: THREE.Mesh
    poroj_low_Guitar_0: THREE.Mesh
  }
  materials: {
    Guitar: THREE.MeshStandardMaterial
  }
  // animations: GLTFAction[]
}

export function Guitar(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/guitar/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, -Math.PI/2, 0]} scale={1.57}>
        <group rotation={[0, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.corpuse_low_Guitar_0.geometry} material={materials.Guitar} position={[0, -30.417, 69.529]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100} />
          <mesh geometry={nodes.corpuse_1_low_Guitar_0.geometry} material={materials.Guitar} position={[8.728, -30.9, 49.483]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={100} />
          <mesh geometry={nodes.bridge_low_Guitar_0.geometry} material={materials.Guitar} position={[6.768, -32.036, 74.77]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.hamb_low_Guitar_0.geometry} material={materials.Guitar} position={[4.388, -32.094, 34.308]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.hamb1_low_Guitar_0.geometry} material={materials.Guitar} position={[7.984, -31.692, 86.697]} rotation={[0.35, 0, -Math.PI / 2]} scale={100} />
          <mesh geometry={nodes.hamb2_low_Guitar_0.geometry} material={materials.Guitar} position={[7.984, -31.692, 86.697]} rotation={[0.35, 0, -Math.PI / 2]} scale={100} />
          <mesh geometry={nodes.hamb3_low_Guitar_0.geometry} material={materials.Guitar} position={[-0.079, -30.978, 144.37]} rotation={[0.35, 0, -Math.PI / 2]} scale={100} />
          <mesh geometry={nodes.grif_low_Guitar_0.geometry} material={materials.Guitar} position={[7.084, -32.25, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.strings_low_Guitar_0.geometry} material={materials.Guitar} position={[4.725, -34.862, -61.509]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100} />
          <mesh geometry={nodes.kolki_low_Guitar_0.geometry} material={materials.Guitar} position={[-4.014, -47.201, -144.344]} rotation={[-Math.PI, 1.334, Math.PI / 2]} scale={100} />
          <mesh geometry={nodes.kolki_1_low_Guitar_0.geometry} material={materials.Guitar} position={[-9.149, -49.572, -147.601]} rotation={[0.074, -1.321, -0.79]} scale={100} />
          <mesh geometry={nodes.poroj_low_Guitar_0.geometry} material={materials.Guitar} position={[7.084, -32.25, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/guitar/scene.gltf')