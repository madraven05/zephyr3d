import { NikeAirJordan } from "@/components/NikeAirJordan";
import {
  ProductCard,
  ProductCardPanel,
  ProductCardTitle,
  ProductCardCanvas,
  ParticlesWave,
} from "@zephyr3D/react";
import React from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const ComponentsPage = () => {
  return (
    <div>
      <ProductCard>
        <ProductCardCanvas className="rounded-t-lg backdrop-blur-sm bg-gradient-to-tl from-gray-50/50 to-white/10">
          <NikeAirJordan
            scale={[10, 10, 10]}
            rotation={[Math.PI / 4, -Math.PI / 4, 0]}
          />
        </ProductCardCanvas>
        <ProductCardPanel className="text-white backdrop-blur-md bg-gradient-to-tl from-white/10 to-black/10">
          <ProductCardTitle>Card Title</ProductCardTitle>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="font-semibold">$400</p>
        </ProductCardPanel>
      </ProductCard>
    </div>
  );
};

export default ComponentsPage;
