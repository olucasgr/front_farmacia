/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',   
        secondary: '#1E88E5',  
        accent: '#FF7043',     
        neutral: '#F5F5F5',    
        dark: '#212121',       
      },
    },
  },
  plugins: [],
}