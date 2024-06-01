
export function girarImagenes() {
  const carrete = document.querySelectorAll(".tarjeta");

  carrete.forEach(carrete => {
    carrete.classList.add("spin");
  });

  setTimeout(() => {
    carrete.forEach(carrete => {
      carrete.classList.remove("spin");
    });
  }, 5000);
}
