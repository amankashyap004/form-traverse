/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {},
      screens: {
         md: { max: "800px" },
         sm: { max: "600px" },
      },
   },
   plugins: [],
};
