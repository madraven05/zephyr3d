import React from "react";
export const ProductCardTitle = ({ children, ...restProps }) => {
    return React.createElement("h2", { ...restProps }, children);
};
