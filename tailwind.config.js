/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./juego/juego.html", "./juego/**/*.js"],
  theme: {
    extend: {
      screens: {
        lg: { min: "992", max: "1200px" },
      },
      backgroundImage: {
        img_juego_movil: src("../Imagenes/fondos/fondo_movil_juego.png"),
        img_juego_escritorio: src(
          "../Imagenes/fondos/fondo_escritorio_juego.png"
        ),
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
