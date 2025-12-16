import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['var(--font-josefin)', 'sans-serif'],
        'neuton': ['var(--font-neuton)', 'serif'],
        'nunito': ['var(--font-nunito)', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
      },
      colors: {
        'cabana': {
          'background': '#e5dccd', // Color de fondo principal (nuevo beige claro)
          'secondary': '#8e7765',   // Color secundario
          'accent': '#4b8ce1',      // Color de acento/CTA
          'light': '#b5a99a',       // Variante más clara del fondo
          'dark': '#7a6d5f',        // Variante más oscura del fondo
          'title': '#7d3a24',       // Color para el título typewriter
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cabana-gradient': 'linear-gradient(135deg, #9a9284 0%, #8e7765 100%)',
      },
    },
  },
  plugins: [],
}
export default config