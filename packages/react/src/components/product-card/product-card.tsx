import React, { HTMLAttributes } from "react";

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {}

export const ProductCard: React.FC<ProductCardProps> = ({ ...restProps }) => {
  return <div {...restProps}>ProductCard</div>;
};