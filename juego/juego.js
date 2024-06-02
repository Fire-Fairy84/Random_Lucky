// import { cambioArchivosInput } from "./cambio_archivos_input.js";
// import { cambiarImagen } from "./cambiar_imagen.js";
// import { imagenesAleatorias } from "./imagenes_aleatorias.js";
// import { girarImagenes } from "./girar_imagenes.js";
// import { mostrarResultadoPopup } from "./popup.js";

// window.iconos = [
//   "anillo.png",
//   "beso.png",
//   "cama.png",
//   "cuchillo.png",
//   "veneno.png",
//   "viaje.png",
// ];

// window.famosos = [
//   "Angelina.png",
//   "Danny.png",
//   "David.png",
//   "Donatella.png",
//   "JuanCar.png",
//   "Lady.png",
//   "Meryl.png",
//   "Marilyn.jpg",
//   "Santiago.png",
//   "Vigo.png",
//   "Bunny.jpg",
//   "Snoop.jpg",
//   "Whoopi.jpg",
//   "AlyMa.jpg",
// ];

// window.compis = [];
// window.imagen_compis = null;
// window.imagen_iconos = null;
// window.imagen_famosos = null;
// window.imagenMaquina = null;

// document.addEventListener("DOMContentLoaded", () => {
//   imagen_compis = document.getElementById("imagen_compis");
//   imagen_iconos = document.getElementById("imagen_iconos");
//   imagen_famosos = document.getElementById("imagen_famosos");
//   imagenMaquina = document.getElementById("maquina");

//   const archivos_input = document.getElementById("archivos");

//   archivos_input.addEventListener("change", cambioArchivosInput);

//   imagenMaquina.addEventListener("click", () => {
//     cambiarImagen();
//     girarImagenes();
//     const resultadoImagenes = imagenesAleatorias();
//     mostrarResultadoPopup(resultadoImagenes);
//   });

//   document.addEventListener("keydown", (event) => {
//     if (event.code === "Space") {
//       cambiarImagen();
//       girarImagenes();
//       const resultadoImagenes = imagenesAleatorias();
//       mostrarResultadoPopup(resultadoImagenes);
//     }
//   });
// });
import { cambioArchivosInput } from "./cambio_archivos_input.js";
import { cambiarImagen } from "./cambiar_imagen.js";
import { imagenesAleatorias } from "./imagenes_aleatorias.js";
import { girarImagenes } from "./girar_imagenes.js";
import { cambiarTitulo } from "./frases.js";
import { mostrarResultadoPopup } from "./popup.js";

window.iconos = [
  "anillo.png",
  "beso.png",
  "cama.png",
  "cuchillo.png",
  "veneno.png",
  "viaje.png",
];

window.famosos = [
  "Angelina.png",
  "Danny.png",
  "David.png",
  "Donatella.png",
  "JuanCar.png",
  "Lady.png",
  "Meryl.png",
  "Marilyn.jpg",
  "Santiago.png",
  "Vigo.png",
  "Bunny.jpg",
  "Snoop.jpg",
  "Whoopi.jpg",
  "AlyMa.jpg",
];

window.compis = [];
window.imagen_compis = null;
window.imagen_iconos = null;
window.imagen_famosos = null;
window.imagenMaquina = null;

document.addEventListener("DOMContentLoaded", () => {
  imagen_compis = document.getElementById("imagen_compis");
  imagen_iconos = document.getElementById("imagen_iconos");
  imagen_famosos = document.getElementById("imagen_famosos");
  imagenMaquina = document.getElementById("maquina");

  const resultado = document.getElementById("resultado");
  const archivos_input = document.getElementById("archivos");

  archivos_input.addEventListener("change", cambioArchivosInput);

  imagenMaquina.addEventListener("click", () => {
    cambiarImagen();
    girarImagenes();

    // girarImagenes dura cierto tiempo, cuando las imagenes dejen de girar,
    // calculamos el resultado
    setTimeout(() => {
      const resultadoImagenes = imagenesAleatorias();
      mostrarResultadoPopup(resultadoImagenes);
    }, 4000); // Ajusta este tiempo si es necesario para que coincida con la duración de la animación de giro
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      cambiarImagen();
      girarImagenes();

      // girarImagenes dura cierto tiempo, cuando las imagenes dejen de girar,
      // calculamos el resultado
      setTimeout(() => {
        const resultadoImagenes = imagenesAleatorias();
        mostrarResultadoPopup(resultadoImagenes);
      }, 4000); // Ajusta este tiempo si es necesario para que coincida con la duración de la animación de giro
    }
  });
});
