import React, { HTMLAttributes, ReactNode } from "react";
export interface ProductCardCanvasProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export declare const ProductCardCanvas: React.FC<ProductCardCanvasProps>;
