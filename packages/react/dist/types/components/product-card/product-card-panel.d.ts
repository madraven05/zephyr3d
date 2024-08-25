import React, { HTMLAttributes, ReactNode } from "react";
export interface ProductCardPanelProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
export declare const ProductCardPanel: React.FC<ProductCardPanelProps>;
