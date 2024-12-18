import { NikeAirJordan } from "@/components/NikeAirJordan";
import { Card, CardCanvas, CardPanel, CardTitle } from "@zephyr3D/react";
import React from "react";

export const CardExample = () => {
  return (
    <Card className="flex flex-col w-72 h-64 mb-10 bg-gradient-to-br from-slate-700 to-slate-500">
      <CardPanel className="flex w-full h-full flex-col p-5 items-start justify-start">
        <div className="flex flex-col gap-5">
          <CardTitle>Nike Air Jordan</CardTitle>
          <p className="text-sm w-40">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="font-semibold">$400</p>
        </div>
        <CardCanvas className="relative -top-20 left-24">
          <NikeAirJordan
            scale={20}
            position={[0, -0.8, 0]}
            rotation={[Math.PI / 3, -Math.PI / 3, Math.PI / 8]}
          />
        </CardCanvas>
      </CardPanel>
    </Card>
  );
};
