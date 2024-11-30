/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Incluye todos los archivos dentro de src
      "./node_modules/flowbite-react/**/*.js", // Incluye los componentes de Flowbite React
    ],
    theme: {
      extend: {
        colors: {
          primary: "#4caf50", // Puedes personalizar colores si lo necesitas
          secondary: "#8e44ad",
        },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'], // Para la fuente Roboto
          googleSans: ['"Google Sans_old"', 'sans-serif'], // Para Google Sans
          benton: ['Benton', 'sans-serif'], // Benton si también lo necesitas
        },
      },
    },
    plugins: [
      require("flowbite/plugin"), // Importa el plugin de Flowbite
    ],
};