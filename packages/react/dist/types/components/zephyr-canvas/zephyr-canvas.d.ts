import { CanvasProps } from "@react-three/fiber";
import React, { HTMLAttributes, ReactNode } from "react";
export interface ZephyrCanvasProps extends HTMLAttributes<HTMLDivElement>, CanvasProps {
    children: ReactNode;
}
export declare const ZephyrCanvas: React.FC<ZephyrCanvasProps>;
