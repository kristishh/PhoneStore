import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx", "./app/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
