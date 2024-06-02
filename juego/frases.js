// document.addEventListener("DOMContentLoaded", function () {
//   const images = document.querySelectorAll(".imagen_iconos");
//   const titulo = document.getElementById("titulo_modal");

//   images.forEach((image) => {
//     const src = image.src;

//     if (src.endsWith("veneno.png")) {
//       titulo.textContent = "Cuidado con el veneno en la relación";
//     } else if (src.endsWith("cama.png")) {
//       titulo.textContent = "Disfrutad de la intimidad";
//     } else if (src.endsWith("anillo.png")) {
//       titulo.textContent = "Felicidades por el compromiso";
//     } else if (src.endsWith("beso.png")) {
//       titulo.textContent = "¡Que viva el amor!";
//     } else if (src.endsWith("viaje.png")) {
//       titulo.textContent = "Que tengáis buen viaje";
//     } else if (src.endsWith("cuchillo.png")) {
//       titulo.textContent = "Cuidado con las traiciones";
//     }
//   });

//   // Para mostrar el modal (para propósitos de prueba)
//   const modal = document.getElementById("popup_resultado");
//   modal.style.display = "block";
// });
// export function cambiarTitulo() {
//   const images = document.querySelectorAll(".imagen_iconos");
//   const titulo = document.getElementById("titulo_modal");

//   images.forEach((image) => {
//     const src = image.src;

//     if (src.endsWith("veneno.png")) {
//       titulo.textContent = "Cuidado con el veneno en la relación";
//     } else if (src.endsWith("cama.png")) {
//       titulo.textContent = "Disfrutad de la intimidad";
//     } else if (src.endsWith("anillo.png")) {
//       titulo.textContent = "Felicidades por el compromiso";
//     } else if (src.endsWith("beso.png")) {
//       titulo.textContent = "¡Que viva el amor!";
//     } else if (src.endsWith("viaje.png")) {
//       titulo.textContent = "Que tengáis buen viaje";
//     } else if (src.endsWith("cuchillo.png")) {
//       titulo.textContent = "Cuidado con las traiciones";
//     }
//   });

// //   // Para mostrar el modal (para propósitos de prueba)
// //   const modal = document.getElementById("popup_resultado");
// //   modal.style.display = "block";
// };
export function cambiarTitulo() {
  const titulo = document.getElementById("titulo_modal");
  const src = imagen_iconos.src;

  if (src.endsWith("veneno.png")) {
    titulo.textContent = "Cuidado con el veneno en la relación";
  } else if (src.endsWith("cama.png")) {
    titulo.textContent = "Disfrutad de la intimidad";
  } else if (src.endsWith("anillo.png")) {
    titulo.textContent = "Felicidades por el compromiso";
  } else if (src.endsWith("beso.png")) {
    titulo.textContent = "¡Que viva el amor!";
  } else if (src.endsWith("viaje.png")) {
    titulo.textContent = "Que tengáis buen viaje";
  } else if (src.endsWith("cuchillo.png")) {
    titulo.textContent = "Cuidado con las traiciones";
  }
};

