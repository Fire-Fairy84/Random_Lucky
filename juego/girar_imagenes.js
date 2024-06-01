
export function girarImagenes() {
  const carrete = document.querySelectorAll(".imagenes_tarjetas");

  carrete.forEach(carrete => {
    carrete.classList.add("spin");
  });

  setTimeout(() => {
    carrete.forEach(carrete => {
      carrete.classList.remove("spin");
    });
  }, 5000);
}
