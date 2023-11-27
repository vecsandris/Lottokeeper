/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
				poppins: ['"Poppins"']
			},
      colors:{
        customRed: '#D42C22',
        customBlue: '#0071E3'
      }
    },
  },
  plugins: [],
}

