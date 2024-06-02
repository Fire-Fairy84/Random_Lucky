window.onload = function () {
  // Abrir el modal automáticamente
  $("#popup_instrucciones").modal();
};

// const audioResultado = document.getElementById("audio_resultado");

// function mostrarResultadoPopup(resultado) {
//   // Obtener el elemento del popup
//   const popupResultado = document.getElementById("popup_resultado");

//   // Insertar el contenido del resultado en el popup
//   const contenedorImagenes = popupResultado.querySelector(
//     ".imagenes_resultado"
//   );
//   contenedorImagenes.innerHTML = ""; // Limpiar contenido anterior

  
//   // Añadir las imágenes del resultado
//   resultado.forEach((imagen) => {
//     const img = document.createElement("img");
//     img.src = imagen.src;
//     img.alt = imagen.alt;
//     img.classList.add("ancho");
//     contenedorImagenes.appendChild(img);
//   });

//   // Mostrar el popup
 
//   setTimeout(() => {
//     $(popupResultado).modal("show");
//     audioResultado.play();
//   }, 4000);
// }
import { cambiarTitulo } from './frases.js';

const audioResultado = document.getElementById("audio_resultado");

export function mostrarResultadoPopup(resultado) {
  // Obtener el elemento del popup
  const popupResultado = document.getElementById("popup_resultado");

  // Insertar el contenido del resultado en el popup
  const contenedorImagenes = popupResultado.querySelector(".imagenes_resultado");
  contenedorImagenes.innerHTML = ""; // Limpiar contenido anterior

  // Añadir las imágenes del resultado
  resultado.forEach((imagen) => {
    const img = document.createElement("img");
    img.src = imagen.src;
    img.alt = imagen.alt;
    img.classList.add("ancho");
    contenedorImagenes.appendChild(img);
  });

  // Llamar a cambiarTitulo después de añadir las imágenes
  cambiarTitulo();

  // Mostrar el popup
  setTimeout(() => {
    $(popupResultado).modal("show");
    audioResultado.play();
  }, 4000);
}

window.onload = function () {
  // Abrir el modal automáticamente
  $("#popup_instrucciones").modal();
};



