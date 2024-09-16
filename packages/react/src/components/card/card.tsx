import React, { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  modelNode?: ReactNode;
  modelPath?: string;
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  modelNode,
  className,
  children = null,
  ...restProps
}) => {
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
};
