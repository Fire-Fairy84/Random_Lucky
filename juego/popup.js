window.onload = function () {
  $("#popup_instrucciones").modal();
};

import { cambiarTitulo } from "./frases.js";

const audioResultado = document.getElementById("audio_resultado");

export function mostrarResultadoPopup(resultado) {
  const popupResultado = document.getElementById("popup_resultado");

  const contenedorImagenes = popupResultado.querySelector(
    ".imagenes_resultado"
  );
  contenedorImagenes.innerHTML = "";
  resultado.forEach((imagen) => {
    const img = document.createElement("img");
    img.src = imagen.src;
    img.alt = imagen.alt;
    img.classList.add("ancho");
    contenedorImagenes.appendChild(img);
  });

  cambiarTitulo();

  // Mostrar el popup
  setTimeout(() => {
    $(popupResultado).modal("show");
    audioResultado.play();
  }, 4000);
}
