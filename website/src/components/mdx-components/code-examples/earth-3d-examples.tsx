import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Loader3D from "@/components/loader-3d";

// import React, { Suspense } from 'react';

const Earth3D = React.lazy(() =>
  import("@zephyr3D/react").then((module) => ({ default: module.Earth3D }))
);
const Earth3DGSON = React.lazy(() =>
  import("@zephyr3D/react").then((module) => ({ default: module.Earth3DGSON }))
);

export const Earth3DExample = ({withAnimations = false}) => {
  return (
    <div className="bg-black h-72 rounded-md">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={1} position={[-5, 3, 4]} />
        <Suspense fallback={<Loader3D />}>
          <Earth3D radius={2.5} withClouds withAnimations={withAnimations}/>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export const Earth3DGSONExample = () => {
  return (
    <div className="bg-white/5 h-72 rounded-md">
      <Canvas>
        <ambientLight intensity={1}/>
        <directionalLight position={[1, -3, 4]} />
        <Suspense fallback={<Loader3D />}>
          <Earth3DGSON
            meshColor="black"
            withClouds
            gsonPath="/countries.geo.json"
          />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
};
