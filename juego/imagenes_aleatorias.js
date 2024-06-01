export function imagenesAleatorias(imagenes) {

  
  const reader = new FileReader();

  reader.onload = function (e) {
    imagen_compis.src = e.target.result;
  };

  reader.readAsDataURL(compis[indiceAleatorio(compis)]);

  reader.onloadend = function () {
    imagen_compis.src = reader.result;
  };

  imagen_iconos.src = "../Imagenes/iconos/" + iconos[indiceAleatorio(iconos)];
  imagen_famosos.src = "../Imagenes/famosos/" + famosos[indiceAleatorio(famosos)];
}

function indiceAleatorio(imagenes) {
  const indice = Math.floor(Math.random() * imagenes.length);

  return indice;
}

