/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Spinnaker'],
        'text': ['Merriweather Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

