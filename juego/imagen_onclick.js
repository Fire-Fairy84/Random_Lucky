// Función para cambiar la imagen
function cambiarImagen() {
  var imagen = document.getElementById("maquina");
  // Aquí cambia la ruta de la imagen por la nueva ruta
  imagen.src = "../Imagenes/.jpg";
}

// Agrega un event listener para el clic en la imagen
document
  .getElementById("imagenCambiante")
  .addEventListener("click", cambiarImagen);
