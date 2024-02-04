/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        // => @media (min-width: 320px - 480px) { Mobile }

        sm: "481px",
        // => @media (min-width: 481px - 768px) { Tab & ipad }

        md: "769px",
        // => @media (min-width: 769px - 1024px) { small Laptop }

        lg: "1025px",
        // => @media (min-width: 1025px - 1299px) { Computer }

        xl: "1300px",
        // => @media (min-width: 1300px  ---- ) { Large then  Computer }
      },
    },
    plugins: [],
  },
};
