import { mostrarResultadoPopup } from "./popup.js";

export function imagenesAleatorias() {
  const compiAleatorio = compis[indiceAleatorio(compis)];

  const reader = new FileReader();
  reader.onload = function (e) {
    imagen_compis.src = e.target.result;

    const iconoAleatorio =
      "../Imagenes/iconos/" + iconos[indiceAleatorio(iconos)];
    const famosoAleatorio =
      "../Imagenes/famosos/" + famosos[indiceAleatorio(famosos)];

    imagen_iconos.src = iconoAleatorio;
    imagen_famosos.src = famosoAleatorio;

    const resultado = [
      { src: imagen_compis.src, alt: "compis" },
      { src: iconoAleatorio, alt: "iconos" },
      { src: famosoAleatorio, alt: "famosos" },
    ];

    mostrarResultadoPopup(resultado);

    const index = compis.indexOf(compiAleatorio);
    if (index > -1) {
      compis.splice(index, 1);
    }
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
