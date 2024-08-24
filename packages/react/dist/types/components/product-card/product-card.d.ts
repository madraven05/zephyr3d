import React, { HTMLAttributes, ReactNode } from "react";
export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
    modelNode?: ReactNode;
    modelPath?: string;
    children: ReactNode;
}
export declare const ProductCard: React.FC<ProductCardProps>;
