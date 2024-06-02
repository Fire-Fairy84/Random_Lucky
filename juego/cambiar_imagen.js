const audio = document.getElementById("audio_maquina");

const path = "../Imagenes/complementos/";
const arriba = "maquinaArriba.png";
const abajo = "maquinaAbajo.png";

export function cambiarImagen() {
  const imagen = document.getElementById("maquina");
  if (imagen.src.endsWith(arriba)) {
    imagen.src = path + abajo;
    imagen.classList.add("maquina-abajo");
  } else {
    imagen.src = path + arriba;
    imagen.classList.remove("maquina-abajo");
  }

  audio.play();
}
