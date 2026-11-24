/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-slower': 'float 16s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'smoke': 'smoke 12s ease-in-out infinite',
        'smoke-delay': 'smoke 15s ease-in-out 3s infinite',
        'smoke-delay2': 'smoke 18s ease-in-out 6s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(10px)' },
          '50%': { transform: 'translateY(-10px) translateX(-10px)' },
          '75%': { transform: 'translateY(-25px) translateX(5px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        smoke: {
          '0%': { transform: 'translateY(100%) translateX(0) scale(1)', opacity: '0' },
          '10%': { opacity: '0.15' },
          '50%': { transform: 'translateY(-20%) translateX(30px) scale(1.8)', opacity: '0.08' },
          '100%': { transform: 'translateY(-100%) translateX(-20px) scale(2.5)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(8, 143, 143, 0.3), 0 0 40px rgba(8, 143, 143, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(8, 143, 143, 0.6), 0 0 80px rgba(8, 143, 143, 0.2)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
