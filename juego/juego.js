import { archivosInputChange } from "./archivos_input_change.js";
import { cambiarImagen } from "./cambiar_imagen.js";
import { imagenesAleatorias } from "./imagenes_aleatorias.js";
import { girarImagenes } from "./girar_imagenes.js";

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
  "AlyMa.jpg"
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

  archivos_input.addEventListener( "change", archivosInputChange );
  if ( imagenMaquina.addEventListener == 'click' )
  {
    
  }
  imagenMaquina.addEventListener("click", () => {
    cambiarImagen();
    girarImagenes();
    // girarImagenes dura cierto tiempo, cuando las imagenes dejen de girar,
    // calculamos el resultado
    imagenesAleatorias();
    // una vez hemos encontrado el resultado, lo mostramos en el popup
    // popupResultado();
    // eliminar resultado del array compis
  });
  // imagenMaquina.addEventListener("click", archivosInputChange);

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
       cambiarImagen();
       girarImagenes();
       // girarImagenes dura cierto tiempo, cuando las imagenes dejen de girar,
       // calculamos el resultado
       imagenesAleatorias();  }
  });
});