import withMDX from "@next/mdx";
import rehypePrismPlus from "rehype-prism-plus";

const nextConfig = {
  output: "export",
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
    ],
  },
  
})(nextConfig);


