import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        serif: ["serif"],
      },
      colors: {
        header: "var(--header)",
        white: "var(--white)",
        black: "var(--black)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        btnPrimary: "var(--btn-primary)",
        btnDisabled: "var(--btn-disabled)",
        border: "var(--border)",
        tripStatus: "var(--trip-status)",
        tripStatusText: "var(--trip-status-text)",
        delayed: "var(--delayed)",
        delayedText: "var(--delayed-text)",
        onTime: "var(--on-time)",
        onTimeText: "var(--on-time-text)",
        progress: "var(--progress)",
        otherStatus: "var(--other)",
        otherStatusText: "var(--other-status-text)",
      },
    },
  },
  plugins: [],
};
export default config;
