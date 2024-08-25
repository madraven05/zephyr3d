import React, { HTMLAttributes, ReactNode } from "react";

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement> {
  modelNode?: ReactNode;
  modelPath?: string;
  children?: ReactNode;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  modelNode,
  children = null,
  ...restProps
}) => {
  return (
    <div className={`w-80 p-5 justify-center items-center`} {...restProps}>
      {children}
    </div>
  );
};
