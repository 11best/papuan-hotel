import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#f59e0b", //amber-500
          "primary-content": "white",
          secondary: "#0ea5e9", //sky-500
          accent: "#f97316", //orange-500
        },
      },
    ],
  },
  plugins: [daisyui],
};
export default config;
