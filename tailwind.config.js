/** @type {import('tailwindcss').Config} */



module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      lobster : ["Lobster", "cursive"],
      inter : ["Inter", "sans-serif"],
      poppins : ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      MainImage: ["url('./images/reactjs-icon-main.png')"],
    },
  },  
  plugins: [],
};



// const defaultTheme = require('tailwindcss/defaultTheme');

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         lobster : ['"Lobster"', ...defaultTheme.fontFamily.sans],
//         poppins : ['"Poppins"', ...defaultTheme.fontFamily.sans],
//         inter : ['"Inter"', ...defaultTheme.fontFamily.sans]

//       }
//     }
//   },
// }
