/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primaryColor: "#162A41",
        backgroundColor: "#E5E5E5",
        secondaryBgColor: "#F8F8FB",
        secondaryParagraph: "#7B7B7B",
        primaryParagraph: "#2A2C30"
      }, 
      fontFamily: {
        'roboto': ['roboto']
      },
      padding:{
        xl: "100px"

      },
      fontSize: {
        'para01': ['18px', {
          lineHeight: '30px'
        }] 
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
