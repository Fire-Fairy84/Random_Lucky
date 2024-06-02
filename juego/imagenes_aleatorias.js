// export function imagenesAleatorias(imagenes) {

  
//   const reader = new FileReader();

//   reader.onload = function (e) {
//     imagen_compis.src = e.target.result;
//   };

//   reader.readAsDataURL(compis[indiceAleatorio(compis)]);

//   reader.onloadend = function () {
//     imagen_compis.src = reader.result;
//   };

//   imagen_iconos.src = "../Imagenes/iconos/" + iconos[indiceAleatorio(iconos)];
//   imagen_famosos.src = "../Imagenes/famosos/" + famosos[indiceAleatorio(famosos)];
// }

// function indiceAleatorio(imagenes) {
//   const indice = Math.floor(Math.random() * imagenes.length);

//   return indice;
// }
// export function imagenesAleatorias(imagenes) {
//   const reader = new FileReader();

//   reader.onload = function (e) {
//     imagen_compis.src = e.target.result;
//   };

//   reader.readAsDataURL(compis[indiceAleatorio(compis)]);

//   reader.onloadend = function () {
//     imagen_compis.src = reader.result;
//   };

//   imagen_iconos.src = "../Imagenes/iconos/" + iconos[indiceAleatorio(iconos)];
//   imagen_famosos.src =
//     "../Imagenes/famosos/" + famosos[indiceAleatorio(famosos)];

//   // Obtener los resultados
//   const resultado = [
//     { src: imagen_compis.src, alt: "compis" },
//     { src: imagen_iconos.src, alt: "iconos" },
//     { src: imagen_famosos.src, alt: "famosos" },
//   ];

//   // Mostrar el resultado en el popup
//   mostrarResultadoPopup(resultado);
// }

// function indiceAleatorio(imagenes) {
//   const indice = Math.floor(Math.random() * imagenes.length);
//   return indice;
// }
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

//   const resultado = document.getElementById("resultado");
//   const archivos_input = document.getElementById("archivos");

//   archivos_input.addEventListener("change", cambioArchivosInput);

//   imagenMaquina.addEventListener("click", () => {
//     cambiarImagen();
//     girarImagenes();
//     // girarImagenes dura cierto tiempo, cuando las imagenes dejen de girar,
//     // calculamos el resultado
//     const resultadoImagenes = imagenesAleatorias();
//     mostrarResultadoPopup(resultadoImagenes);
//   });

//   document.addEventListener("keydown", (event) => {
//     if (event.code === "Space") {
//       cambiarImagen();
//       girarImagenes();
//       // girarImagenes dura cierto tiempo, cuando las imagenes dejen de girar,
//       // calculamos el resultado
//       const resultadoImagenes = imagenesAleatorias();
//       mostrarResultadoPopup(resultadoImagenes);
//     }
//   });
// });
import { mostrarResultadoPopup } from "./popup.js";

export function imagenesAleatorias() {
  const reader = new FileReader();

  reader.onload = function (e) {
    imagen_compis.src = e.target.result;
  };

  reader.readAsDataURL(compis[indiceAleatorio(compis)]);

  reader.onloadend = function () {
    imagen_compis.src = reader.result;
  };

  imagen_iconos.src = "../Imagenes/iconos/" + iconos[indiceAleatorio(iconos)];
  imagen_famosos.src =
    "../Imagenes/famosos/" + famosos[indiceAleatorio(famosos)];

  // Obtener los resultados
  const resultado = [
    { src: imagen_compis.src, alt: "compis" },
    { src: imagen_iconos.src, alt: "iconos" },
    { src: imagen_famosos.src, alt: "famosos" },
  ];

  // Mostrar el resultado en el popup
  mostrarResultadoPopup(resultado);

  return resultado;
}

function indiceAleatorio(imagenes) {
  const indice = Math.floor(Math.random() * imagenes.length);
  return indice;
}
