const imagen = document.getElementById("maquinaArriba");
const audio = document.getElementById("miAudio");

// Añadir evento de clic a la imagen
imagen.addEventListener("click", () => {
  // Cambiar la fuente de la imagen
  imagen.src = "maquinaAbajo.svg";

  // Reproducir el audio
  audio.play();
});
function girar() {
  const compiImagen = getRandomImage(compis);
  const iconosImagen = getRandomImage(iconos);
  const famososImagen = getRandomImage(famosos);
}
