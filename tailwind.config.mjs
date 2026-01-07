/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Outfit", "sans-serif"],
        body: ["Space Mono", "monospace"],
      },
      colors: {
        cyber: {
          dark: "#0a0a0f",
          darker: "#050508",
          accent: "#00d4aa",
          "accent-dim": "#00a882",
          purple: "#9945ff",
          pink: "#ff6b9d",
        },
        light: {
          bg: "#fafafa",
          surface: "#ffffff",
          muted: "#f4f4f5",
          border: "#e4e4e7",
          text: "#18181b",
          "text-muted": "#52525b",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00ffcc, 0 0 10px #00ffcc" },
          "100%": { boxShadow: "0 0 20px #00ffcc, 0 0 30px #00ffcc" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
