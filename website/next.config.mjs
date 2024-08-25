import withMDX from "@next/mdx";
import rehypeAddClasses from "rehype-add-classes";
import rehypePrismPlus from "rehype-prism-plus";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

export default withMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      rehypePrismPlus,
      [
        rehypeAddClasses,
        { pre: "custom-code-block", code: "custom-code" },
      ],
    ],
  },
})(nextConfig);
