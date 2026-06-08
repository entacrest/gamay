/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#e8edf7",
          100: "#c5d0ea",
          200: "#9fb1db",
          300: "#7892cc",
          400: "#577abf",
          500: "#3663b3",
          600: "#1a3f7a",
          700: "#0f2a57",
          // 800: "#0a1f42",
          // 900: "#06142c",
          800: "#1f1d1d",
          900: "#1f1d1d"
        },
        gold: {
          50:  "#fef9ec",
          100: "#faeec7",
          200: "#f5e09e",
          300: "#f0d275",
          400: "#eac34c",
          500: "#d4a017",
          600: "#b88212",
          700: "#8f640d",
          800: "#664708",
          900: "#3d2b05",
          // 800: "#a78730",
          // 900: "#a78730"
        },
        emerald: {
          50:  "#e8f5f0",
          100: "#c4e5d8",
          200: "#9dd4be",
          300: "#74c2a4",
          400: "#4db48d",
          500: "#22a66c",
          600: "#188a57",
          700: "#106b41",
          800: "#094d2e",
          900: "#042f1b",
        },
      },
      // fontFamily: {
      //   display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      //   body:    ['"DM Sans"', 'sans-serif'],
      //   mono:    ['"JetBrains Mono"', 'monospace'],
      // },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'slide-left': 'slideLeft 0.7s ease forwards',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:    { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideLeft: { '0%': { opacity: 0, transform: 'translateX(30px)' }, '100%': { opacity: 1, transform: 'translateX(0)' } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      backgroundImage: {
        'hero-pattern':     "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'grid-pattern':     "linear-gradient(rgba(26,63,122,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,63,122,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
