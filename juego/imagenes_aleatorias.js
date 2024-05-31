let compis = [];

document.addEventListener("DOMContentLoaded", () => {
  const archivos_input = document.getElementById("archivos");
  const imagen1 = document.getElementById("imagen_compis");
  const imagen2 = document.getElementById("imagen_iconos");
  const imagen3 = document.getElementById("imagen_famosos");
  const resultado = document.getElementById("resultado");

  archivos_input.addEventListener("change", (event) => {
    compis = Array.from(event.target.files);

    const reader = new FileReader();

    reader.onload = function (e) {
      imagen1.src = e.target.result;
    };

    const image1src = imagenesAleatorias(compis);
    reader.readAsDataURL(compis[image1src]);

    reader.onloadend = function () {
      imagen1.src = reader.result;
    };

    /*// Mostrar imágenes aleatorias
    imagen2.src = "../Imagenes/iconos/" + imagenesAleatorias(iconos);
    imagen3.src = "../Imagenes/famosos/" + imagenesAleatorias(famosos);
  });

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
  
  /*function imagenesAleatorias(imagenes) {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    const imagen = imagenes[indiceAleatorio];

    if (typeof imagen === "string") return imagen;

    return indiceAleatorio;
  }*/
});})
export{reader, imagen1, imagen2, imagen3}