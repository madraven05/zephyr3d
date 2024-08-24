import React from "react";
export const ProductCardPanel = ({ className, children, }) => {
    return (React.createElement("div", { className: `flex flex-col gap-3 rounded-lg shadow-lg p-5 ${className}` }, children));
};
