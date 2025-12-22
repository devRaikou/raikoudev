/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blob: {
          "0%, 100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        glow: {
          "from": {
            boxShadow: "0 0 10px rgba(52, 211, 153, 0.2), 0 0 20px rgba(52, 211, 153, 0.1)",
          },
          "to": {
            boxShadow: "0 0 20px rgba(52, 211, 153, 0.4), 0 0 30px rgba(52, 211, 153, 0.2)",
          },
        },
      }
    },
  },
  plugins: [],
}

