import React, { HTMLAttributes, ReactNode } from "react";

export interface ProductCardPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ProductCardPanel: React.FC<ProductCardPanelProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div
      className={`flex flex-col gap-3 rounded-b-lg shadow-lg p-5 ${className}`}
      {...restProps}
    >
      {children}
    </div>
  );
};
