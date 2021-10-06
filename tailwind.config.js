module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        btcBg: "#ffb65e",
        ethBg: "#8097f5",
        chzBg: "#dd5059",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
