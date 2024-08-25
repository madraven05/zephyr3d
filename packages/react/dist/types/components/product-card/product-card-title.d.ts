import React, { HTMLAttributes, ReactNode } from "react";
export interface ProductCardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
}
export declare const ProductCardTitle: React.FC<ProductCardTitleProps>;
