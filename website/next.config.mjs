import withMDX from "@next/mdx";
import rehypeAddClasses from "rehype-add-classes";
import rehypePrismPlus from "rehype-prism-plus";
import jsonLoader from "json-loader";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  webpack(config) {
    // Add GeoJSON loader
    config.module.rules.push({
      test: /\.geojson$/,
      use: ["json-loader"],
    });

    return config;
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


