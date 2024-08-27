import { Canvas, CanvasProps, Props } from "@react-three/fiber";
import React, {
  ForwardRefExoticComponent,
  HTMLAttributes,
  ReactNode,
  RefAttributes,
} from "react";

export interface ZephyrCanvasProps
  extends HTMLAttributes<HTMLDivElement>,
    CanvasProps {
  children: ReactNode;
}

export const ZephyrCanvas: React.FC<ZephyrCanvasProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`${className}`}>
      <Canvas {...props}>{children}</Canvas>
    </div>
  );
};
