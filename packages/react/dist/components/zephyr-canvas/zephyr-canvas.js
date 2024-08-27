import { Canvas } from "@react-three/fiber";
import React from "react";
export const ZephyrCanvas = ({ children, className, ...props }) => {
    return (React.createElement("div", { className: `${className}` },
        React.createElement(Canvas, { ...props }, children)));
};
