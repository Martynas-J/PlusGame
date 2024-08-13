/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-left":
          "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-right":
          "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-up":
          "slide-up 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-down":
          "slide-down 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "flip-forward":
          "flip-forward 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) both",
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-1 * var(--slide-amount)))" },
        },
        "slide-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(var(--slide-amount))" },
        },
        "slide-up": {
          "0%": { transform: "translateY(0)" },
          "100%": {
            transform: "translateY(calc(-1 * var(--slide-amount-small)))",
          },
        },
        "slide-down": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(var(--slide-amount-small))" },
        },
        "flip-forward": {
          "0%": {
            transform: "translateX(0) translateZ(0) rotateY(0)",
            transformOrigin: "0% 50%",
          },
          "100%": {
            transform: "translateX(-100%) translateZ(160px) rotateY(180deg)",
            transformOrigin: "100% 0%",
          },
        },
      },
    },
  },
  plugins: [],
};
