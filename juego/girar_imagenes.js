export function girarImagenes() {
  const tarjetas = document.querySelectorAll(".tarjeta");

  tarjetas.forEach((tarjeta) => {
    tarjeta.classList.add("spin");
  });

  setTimeout(() => {
    tarjetas.forEach((tarjeta) => {
      tarjeta.classList.remove("spin");
    });
  }, 4000);
}


