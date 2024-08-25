import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { HTMLAttributes, ReactNode } from "react";
import { NikeAirJordan } from "../NikeAirJordan";


export interface ProductCardCanvasProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode
}

export const ProductCardCanvas:React.FC<ProductCardCanvasProps> = ({children, className, ...restProps}) => {
  return (
    <div className={`h-52 ${className}`} {...restProps}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight />
        <spotLight position={[0, 10, 0]} />
        {children}
        <OrbitControls />
      </Canvas>
    </div>
  );
};
