import React, { HTMLAttributes, ReactNode } from "react";

export interface CardPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CardPanel: React.FC<CardPanelProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <div
      className={className}
      {...restProps}
    >
      {children}
    </div>
  );
};
