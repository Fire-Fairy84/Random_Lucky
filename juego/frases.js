export function cambiarTitulo() {
  const titulo = document.getElementById("titulo_modal");
  if (!titulo) return;

  const imagenIconos = document.querySelector(
    ".imagenes_resultado img[alt='iconos']"
  );
  if (!imagenIconos) return;

  const src = imagenIconos.src;

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
}
