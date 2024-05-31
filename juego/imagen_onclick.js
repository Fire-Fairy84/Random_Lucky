// Función para cambiar la imagen
import { reader, imagen1, imagen2, imagen3 } from "./imagenes_aleatorias";
const audio = document.getElementById("miAudio");

function cambiarImagen() {
  var imagen = document.getElementById("maquina");
  // Aquí cambia la ruta de la imagen por la nueva ruta
  imagen.src = "../Imagenes/complementos/maquinaAbajo.svg";
  imagen.classList.add("maquina-abajo");


  audio.play();


  // Mostrar imágenes aleatorias
  imagen2.src = "../Imagenes/iconos/" + imagenesAleatorias(iconos);
  imagen3.src = "../Imagenes/famosos/" + imagenesAleatorias(famosos);
};

const iconos = [
  "anillo.png",
  "beso.png",
  "cama.png",
  "cuchillo.png",
  "veneno.png",
  "viaje.png",
];

const famosos = [
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

  function imagenesAleatorias(imagenes) {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    const imagen = imagenes[indiceAleatorio];

    if (typeof imagen === "string") return imagen;

    return indiceAleatorio;

  }


// // Agrega un event listener para el clic en la imagen
// document
//   .getElementById("imagenCambiante")
//     .addEventListener( "click", cambiarImagen );
  

    // const imagen = document.getElementById("maquinaArriba");
    // const audio = document.getElementById("miAudio");

    // // Añadir evento de clic a la imagen
    // imagen.addEventListener("click", () => {
    //   // Cambiar la fuente de la imagen
    //   imagen.src = "maquinaAbajo.svg";

    //   // Reproducir el audio
    //   audio.play();
    // } );
    
    // const cambiarImagen = () => {
    //   document.getElementById("maquinaArriba").src =
    //     "./imagenes/maquinaAbajo.jpg";
    // };

