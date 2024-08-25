import React from "react";
export const ProductCard = ({ modelNode, children = null, ...restProps }) => {
    return (React.createElement("div", { className: `w-80 p-5 justify-center items-center`, ...restProps }, children));
};
