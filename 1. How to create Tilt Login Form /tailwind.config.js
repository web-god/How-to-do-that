/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        width:{
          '40-r':'40rem',
          '35-r':'35rem'
        },
        height:{
          '40-r':'40rem',
          '35-r':'35rem'
        },
        boxShadow:{
          '5xl':'20px 20px 50px rgba(0,0,0,0.5)',
        },
        fontFamily:{
          'poppins':['Poppins','sans-serif'] 
        }
      },
    },
    plugins: [],
  }
  