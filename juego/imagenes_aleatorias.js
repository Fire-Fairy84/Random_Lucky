
import { mostrarResultadoPopup } from "./popup.js";

export function imagenesAleatorias() {
  const compiAleatorio = compis[indiceAleatorio(compis)];

  const reader = new FileReader();
  reader.onload = function (e) {
    imagen_compis.src = e.target.result;

    
    imagen_iconos.src = "../Imagenes/iconos/" + iconos[indiceAleatorio(iconos)];
    imagen_famosos.src =
      "../Imagenes/famosos/" + famosos[indiceAleatorio(famosos)];


    const resultado = [
      { src: imagen_compis.src, alt: "compis" },
      { src: imagen_iconos.src, alt: "iconos" },
      { src: imagen_famosos.src, alt: "famosos" },
    ];
   
    mostrarResultadoPopup(resultado);
  };

  reader.readAsDataURL(compiAleatorio);

  return [
    { src: imagen_compis.src, alt: "compis" },
    { src: imagen_iconos.src, alt: "iconos" },
    { src: imagen_famosos.src, alt: "famosos" },
  ];
}

function indiceAleatorio(imagenes) {
  const indice = Math.floor(Math.random() * imagenes.length);
  return indice;
}
