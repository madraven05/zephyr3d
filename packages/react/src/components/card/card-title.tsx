import React, { HTMLAttributes, ReactNode } from "react";

export interface CardTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  ...restProps
}) => {
  return <h2 {...restProps}>{children}</h2>;
};
