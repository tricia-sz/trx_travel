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
      bannerImg: "url('/travel-banner.svg')",
      blackOverlay: 
        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8)100%)"
     },
    
    },
  },
  plugins: [],
} satisfies Config;
