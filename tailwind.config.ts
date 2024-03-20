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
        'custom-blue': '#F9FAFD',
        'custom-gray': '#E9EDF6',
        'main': '#F9FAFD',
        'custom-gray-blue': '#D3E2FD',
        'light-blue': '#C3E7FE',
        'docs': '#F1F3F9',
        'dbar': '#EDF2FA',
        'docolor': '#F9FBFD'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  
};
export default config;
