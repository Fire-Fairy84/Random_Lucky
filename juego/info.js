// document.getElementById("boton_info").onclick = function () {
//   alert(
//     "Recuerda! Escoge los participantes, luego clickea en la palanca o presiona la tecla espaciadora!"
//   );
// };
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});