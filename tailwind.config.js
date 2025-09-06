/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./neon-rain-page.liquid",
    "./neon-rain-sections.liquid",
    "./**/*.{html,js,liquid}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0080',
        accent: '#00F0FF',
        noir: '#0F0F0F',
        neon: '#08FDD8',
        muted: '#444',
      },
      fontFamily: {
        headline: ['Bebas Neue', 'Anton', 'sans-serif'],
        body: ['Sora', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        rainDrop: {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        neonPulse: {
          '0%, 100%': { 
            textShadow: '0 0 5px #00F0FF, 0 0 10px #00F0FF, 0 0 15px #00F0FF',
            opacity: '0.8'
          },
          '50%': { 
            textShadow: '0 0 10px #FF0080, 0 0 20px #FF0080, 0 0 30px #FF0080',
            opacity: '1'
          },
        },
        cyberGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(0, 240, 255, 0.1)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(255, 0, 128, 0.5), 0 0 60px rgba(255, 0, 128, 0.2)',
            transform: 'scale(1.05)'
          },
        }
      },
      animation: {
        glitch: 'glitch 1s infinite',
        rain: 'rainDrop 3s linear infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
        'cyber-glow': 'cyberGlow 3s ease-in-out infinite',
      },
      backgroundImage: {
        'cyber-grid': `
          linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
        `,
        'neon-gradient': 'linear-gradient(45deg, #00F0FF, #FF0080, #08FDD8)',
        'rain-gradient': 'linear-gradient(to bottom, transparent, #00F0FF, #FF0080)',
      },
      backgroundSize: {
        'cyber-grid': '50px 50px',
      },
      textShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 240, 255, 0.5)',
        'neon-lg': '0 0 40px rgba(0, 240, 255, 0.8)',
        'cyber': '0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(0, 240, 255, 0.1)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon': {
          textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        },
        '.text-shadow-neon-lg': {
          textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        },
        '.box-shadow-neon': {
          boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
        },
        '.box-shadow-neon-lg': {
          boxShadow: '0 0 40px rgba(0, 240, 255, 0.8)',
        },
        '.cyber-grid-bg': {
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

