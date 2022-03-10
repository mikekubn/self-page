module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      slate50: '#f8fafc',
      slate900: '#0f172a',
      gray900: '#111827',
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      white: '#ffffff',
      'gray-dark': '#273444',
      gray: '#8492a6',
      gray100: '#f3f4f6',
      sky300: '#7dd3fc',
      sky500: '#0ea5e9',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      Asap: ['Asap', 'sans-serif'],
      AsapItal: ['Asap', 'sans-serif'],
    },
    extend: {
      textUnderlineOffset: {
        3: '3px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
