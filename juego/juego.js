import { archivosInputChange } from "./archivos_input_change.js";
import { cambiarImagen } from "./cambiar_imagen.js";
import { imagenesAleatorias } from "./imagenes_aleatorias.js";

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
  "Pedro.png",
  "Santiago.png",
  "Vigo.png",
];

window.compis = [];
window.imagen1 = null;
window.imagen2 = null;
window.imagen3 = null;
window.imagenMaquina = null;

document.addEventListener("DOMContentLoaded", () => {
  imagen1 = document.getElementById("imagen_compis");
  imagen2 = document.getElementById("imagen_iconos");
  imagen3 = document.getElementById("imagen_famosos");
  imagenMaquina = document.getElementById("maquina");

  const resultado = document.getElementById("resultado");
  const archivos_input = document.getElementById("archivos");

  archivos_input.addEventListener("change", archivosInputChange);
  imagenMaquina.addEventListener("click", () => {
    cambiarImagen();
    imagenesAleatorias();
  });
});
