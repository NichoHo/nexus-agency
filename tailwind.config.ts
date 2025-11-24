import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          primary: "#00FF94", // Terminal Green
          black: "#0A0A0A",   // Surface Black
          card: "#141414",    // Card Black
          border: "#333333",  // Stroke Grey
          text: "#FFFFFF",    // Display White
          muted: "#B0B0B0",   // Body Grey
        },
      },
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"], // Space Grotesk
        body: ["var(--font-inter)", "sans-serif"],    // Inter
      },
      borderRadius: {
        'nexus': '4px', // Geometry: Sharp edges mixed with subtle rounding
        'nexus-sm': '2px',
      },
      letterSpacing: {
        'tight-display': '-0.02em', // -2% tracking for headlines
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1A1A1A 1px, transparent 1px)",
        'glow-radial': "radial-gradient(circle at center, rgba(0, 255, 148, 0.05) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;