export function girarImagenes() {
  const tarjetas = document.querySelectorAll(".tarjeta");
  
  console.log("Tarjetas encontradas:", tarjetas);

  tarjetas.forEach(tarjeta => {
    tarjeta.classList.add("spin");
    console.log("Añadiendo spin a:", tarjeta);
  });

  setTimeout(() => {
    tarjetas.forEach(tarjeta => {
      tarjeta.classList.remove("spin");
      console.log("Removiendo spin de:", tarjeta);
    });
  }, 4000);
}
