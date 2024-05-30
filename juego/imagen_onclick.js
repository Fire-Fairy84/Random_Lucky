// Función para cambiar la imagen
function cambiarImagen() {
  var imagen = document.getElementById("maquina");
  // Aquí cambia la ruta de la imagen por la nueva ruta
  imagen.src = "../Imagenes/.jpg";
}

// Agrega un event listener para el clic en la imagen
document
  .getElementById("imagenCambiante")
    .addEventListener( "click", cambiarImagen );
  

    const imagen = document.getElementById("maquinaArriba");
    const audio = document.getElementById("miAudio");

    // Añadir evento de clic a la imagen
    imagen.addEventListener("click", () => {
      // Cambiar la fuente de la imagen
      imagen.src = "maquinaAbajo.svg";

      // Reproducir el audio
      audio.play();
    } );
    
    const cambiarImagen = () => {
      document.getElementById("maquinaArriba").src =
        "./imagenes/maquinaAbajo.jpg";
    };

