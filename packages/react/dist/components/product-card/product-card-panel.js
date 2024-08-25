import React from "react";
export const ProductCardPanel = ({ className, children, ...restProps }) => {
    return (React.createElement("div", { className: `flex flex-col gap-3 rounded-b-lg shadow-lg p-5 ${className}`, ...restProps }, children));
};
