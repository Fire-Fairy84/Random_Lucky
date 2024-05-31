import { imagenesAleatorias } from "./imagenes_aleatorias.js";

export function archivosInputChange(event) {
  compis = Array.from(event.target.files);

  const reader = new FileReader();

  reader.onload = function (e) {
    imagen1.src = e.target.result;
  };

  reader.readAsDataURL(compis[0]);

  reader.onloadend = function () {
    imagen1.src = reader.result;
  };
}
