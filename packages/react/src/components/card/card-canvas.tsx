import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { HTMLAttributes, ReactNode } from "react";
import { NikeAirJordan } from "../NikeAirJordan";


export interface CardCanvasProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode
}

export const CardCanvas:React.FC<CardCanvasProps> = ({children, className, ...restProps}) => {
  return (
    <div className={`h-52 ${className}`} {...restProps}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.7} />
        <directionalLight intensity={1} position={[2, 2, 2]} />
        {children}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};
