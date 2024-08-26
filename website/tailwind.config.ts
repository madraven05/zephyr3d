import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "../packages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "heading": ['Spinnaker', 'sans-serif'],
        "regular": ['Merriweather Sans', 'sans-serif']
      },
      borderWidth: {
        1: "1px"
      }
    },
  },
  plugins: [],
};
export default config;
