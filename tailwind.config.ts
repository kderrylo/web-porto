import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "#222831",   // Dark gray/black color          for background
        secondary: "#393E46", // Slightly lighter gray          for button
        accent: "#00ADB5",    // Bright cyan/teal color         for headline
        darkAccent: "#008A92",    
        light: "#EEEEEE",     // Light gray/white-like color    for text body
        navbar: "#011423",
      },
    },
  },
  plugins: [],
};
export default config;
