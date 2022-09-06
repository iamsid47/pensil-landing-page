/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      lineHeight: {
        'extra-tight': '0.15',
      },
      fontFamily: {
        nunito:['Nunito', "sans-serif"],
       },
    },
  },
  plugins: [
  ],
}
