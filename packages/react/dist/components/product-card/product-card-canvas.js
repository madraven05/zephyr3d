import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
export const ProductCardCanvas = ({ children, className, ...restProps }) => {
    return (React.createElement("div", { className: `h-52 ${className}`, ...restProps },
        React.createElement(Canvas, { camera: { position: [0, 0, 4] } },
            React.createElement("ambientLight", null),
            React.createElement("spotLight", { position: [0, 10, 0] }),
            children,
            React.createElement(OrbitControls, null))));
};
