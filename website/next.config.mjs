import withMDX from "@next/mdx";

export default withMDX({
  extension: /\.mdx?$/,
  // Any other Next.js config options here
})({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});
