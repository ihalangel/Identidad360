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
        primary: '#1E3A8A',
        'secondary-green': '#10B981',
        'secondary-gray': '#6B7280',
        accent: '#FBBF24',
        'neutral-light': '#F9FAFB',
        'neutral-dark': '#333333',
        text: '#333333',
        background: '#FFFFFF',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }

    },
  },
  plugins: [],
};
export default config;
