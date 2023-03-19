/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('./Assets/Group 1.png')",
        "details-bg": "url('./Assets/Group 38.png')",
        "diagram-bg": "url('./Assets/Vector 1.png')",
        "footer-bg": "url('./Assets/Group 20.png')",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [],
};
