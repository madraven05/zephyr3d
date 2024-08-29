import React from "react";
import { Html } from "@react-three/drei";
import { TbCube3dSphere } from "react-icons/tb";

const Loader3D = () => {
  return (
    <Html>
      <div className="flex gap-2 justify-center items-center">
        <h3>Loading...</h3>
        <TbCube3dSphere className="animate-spin" />
      </div>
    </Html>
  );
};

export default Loader3D;
