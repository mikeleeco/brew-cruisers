/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    {
      pattern: /grid-cols-./,
    }
  ],
  theme: {
    extend: {
      aspectRatio: {
      }
    },
    corePlugins: {
      fontSize: false,
    },
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif'],
      serif: ['Helvetica Neue'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Helvetica Neue'],
      body: ['"Open Sans"']
    }
  },
  plugins: [require('daisyui')],
  // darkMode: 'class',
  daisyui: {
    themes: [
      {
        // default: {
        //   primary: '#0d2240',
        //   secondary: '#e7f0ed',
        //   accent: '#5028a1',
        //   neutral: '#0d2240',
        //   'base-100': '#d6d9e0',
        //   info: '#e7f0ed',
        //   success: '#28e6b0',
        //   warning: '#f2c04a',
        //   error: '#ec696b'
        // },
        light: {
          primary: '#f7a800',
          secondary: '#f7a800',
          accent: '#00a8e1',
          neutral: '#020104',
          'base-100': '#d6d9e0',
          info: '#e7f0ed',
          success: '#28e6b0',
          warning: '#f2c04a',
          error: '#ec696b'
        },
        dark: {
          primary: '#00a8e1',
          secondary: '#00a8e1',
          accent: '#f7a800',
          neutral: '#ffffff',
          'base-100': '#494854',
          info: '#0d2240',
          success: '#13534b',
          warning: '#f7c01d',
          error: '#f16a7e'
        }
      }
    ]
  }
};