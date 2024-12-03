import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
    colors: {
      Primary: "#F3F3F3",
      OnPrimary: "#575757",
      Secondary: "#FB9333",
      OnSecondary: "#828282",
      Surface: "#FFF1DE",
      OnSurface: "#585858",
      Highlight: "#EBF5FF",
      Outline: "#7F8C8D",
      OutlineFocus: "#3498DB",
      Error: "#E74C3C",
      Success: "#27AE60",
      Warning: "#F39C12",
      ButtonSI: "#2ECC71",
      Banner: "#FFFFFF",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
} satisfies Config;
