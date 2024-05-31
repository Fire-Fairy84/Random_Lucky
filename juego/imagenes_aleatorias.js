export function imagenesAleatorias(imagenes) {
  const reader = new FileReader();

  reader.onload = function (e) {
    imagen1.src = e.target.result;
  };

  reader.readAsDataURL(compis[indiceAleatorio(compis)]);

  reader.onloadend = function () {
    imagen1.src = reader.result;
  };

  imagen2.src = "../Imagenes/iconos/" + iconos[indiceAleatorio(iconos)];
  imagen3.src = "../Imagenes/famosos/" + famosos[indiceAleatorio(famosos)];
}

function indiceAleatorio(imagenes) {
  const indice = Math.floor(Math.random() * imagenes.length);

  return indice;
}
