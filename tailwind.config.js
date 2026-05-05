/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF7F0",
          100: "#F8F2E8",
          200: "#F4EEE5",
          300: "#EDE3D2",
          400: "#E0D2BB",
        },
        ink: {
          DEFAULT: "#1A1F1B",
          soft: "#2C332D",
          muted: "#5C6360",
          light: "#8A8F8B",
        },
        sage: {
          50: "#EAEEEB",
          100: "#D6DCD7",
          200: "#A3B0A5",
          300: "#6F8275",
          400: "#506458",
          500: "#3D5448",
          600: "#2F4338",
          700: "#22312A",
        },
        terra: {
          50: "#FBEFE8",
          100: "#F4D9C9",
          200: "#E5B294",
          300: "#D69470",
          400: "#C97B5A",
          500: "#B26447",
          600: "#8E4F38",
        },
        blush: {
          50: "#FAF1EA",
          100: "#F2E2D5",
          200: "#E8D5C7",
          300: "#D9BBA5",
          400: "#C39E84",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Manrope"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "fluid-7xl": "clamp(3rem, 9vw, 8rem)",
        "fluid-6xl": "clamp(2.5rem, 7vw, 6rem)",
        "fluid-5xl": "clamp(2rem, 5vw, 4.5rem)",
        "fluid-4xl": "clamp(1.75rem, 4vw, 3.25rem)",
        "fluid-3xl": "clamp(1.5rem, 3vw, 2.25rem)",
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        "8xl": "88rem",
        prose: "62ch",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "30%": { transform: "translate(3%,-15%)" },
          "50%": { transform: "translate(12%,9%)" },
          "70%": { transform: "translate(9%,4%)" },
          "90%": { transform: "translate(-1%,7%)" },
        },
      },
    },
  },
  plugins: [],
};
