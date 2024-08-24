import { Canvas } from "@react-three/fiber";
import React, { HTMLAttributes, ReactNode } from "react";
import { OrbitControls } from "@react-three/drei";
import { NikeAirJordan } from "../NikeAirJordan";
import { ProductCardTitle } from "./product-card-title";
import { ProductCardPanel } from "./product-card-panel";

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  modelNode?: ReactNode;
  modelPath?: string;
  children: ReactNode;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  modelNode,
  ...restProps
}) => {
  return (
    <div className="gap-5 p-5 w-96 justify-center items-center" {...restProps}>
      <div className="h-72 rounded-lg bg-gradient-to-b dark:from-white/30 from-gray-600/50 backdrop-blur-lg">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight />
          <spotLight position={[0, 10, 0]} />
          <NikeAirJordan
            scale={[10, 10, 10]}
            rotation={[Math.PI / 4, -Math.PI / 4, 0]}
          />
          <OrbitControls />
        </Canvas>
      </div>
      <ProductCardPanel>
        <ProductCardTitle>Card Title</ProductCardTitle>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="font-semibold">$400</p>
      </ProductCardPanel>
    </div>
  );
};
