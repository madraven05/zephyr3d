import React, { HTMLAttributes, ReactNode } from "react";

export interface ProductCardTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const ProductCardTitle: React.FC<ProductCardTitleProps> = ({
  children,
  ...restProps
}) => {
  return <h2 {...restProps}>{children}</h2>;
};
