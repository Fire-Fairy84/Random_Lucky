const audio = document.getElementById("miAudio");

const path = "../Imagenes/complementos/";
const arriba = "maquinaArriba.png";
const abajo = "maquinaAbajo.svg";

export function cambiarImagen() {
  const imagen = document.getElementById("maquina");
  // Aquí cambia la ruta de la imagen por la nueva ruta
  if (imagen.src.endsWith(arriba)) {
    imagen.src = path + abajo;
    imagen.classList.add("maquina-abajo");
  } else {
    imagen.src = path + arriba;
    imagen.classList.remove("maquina-abajo");
  }

  audio.play();
}
