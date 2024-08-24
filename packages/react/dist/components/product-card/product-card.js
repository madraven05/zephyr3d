import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { NikeAirJordan } from "../NikeAirJordan";
import { ProductCardTitle } from "./product-card-title";
import { ProductCardPanel } from "./product-card-panel";
export const ProductCard = ({ ...restProps }) => {
    return (React.createElement("div", { className: "gap-5 p-5 w-96 justify-center items-center" },
        React.createElement("div", { className: "h-72 rounded-lg bg-gradient-to-b dark:from-white/30 from-gray-600/50 backdrop-blur-lg" },
            React.createElement(Canvas, { camera: { position: [0, 0, 4] } },
                React.createElement("ambientLight", null),
                React.createElement("spotLight", { position: [0, 10, 0] }),
                React.createElement(NikeAirJordan, { scale: [10, 10, 10], rotation: [Math.PI / 4, -Math.PI / 4, 0] }),
                React.createElement(OrbitControls, null))),
        React.createElement(ProductCardPanel, null,
            React.createElement(ProductCardTitle, null, "Card Title"),
            React.createElement("p", { className: "text-sm" }, "Lorem ipsum dolor sit amet consectetur adipisicing elit."),
            React.createElement("p", { className: "font-semibold" }, "$400"))));
};
