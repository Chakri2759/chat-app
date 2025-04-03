import daisyui from 'daisyui'
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust path for your project
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
