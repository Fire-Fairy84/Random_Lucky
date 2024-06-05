let filesList = [];
const fileInputMulti = document.querySelector("#archivos");
const multiSelectorUniqPreview = document.querySelector("#lista");

function getIndexOfFileList(name, list) {
  return list.reduce(
    (position, file, index) => (file.name === name ? index : position),
    -1
  );
}
function arrayFilesToFileList(filesList) {
  return filesList.reduce(function (dataTransfer, file) {
    dataTransfer.items.add(file);
    return dataTransfer;
  }, new DataTransfer()).files;
}
function renderPreviews(currentFileList, target) {
  target.innerHTML = ""; 
  currentFileList.forEach((file) => {
    const image = document.createElement("img");
    image.src = URL.createObjectURL(file); 
    image.classList.add("imagen_previa"); 
    const myButtonRemove = document.createElement("button");
    myButtonRemove.textContent = "X";
    myButtonRemove.addEventListener("click", () => {
      filesList = deleteArrayElementByValue(filesList, file); 
      URL.revokeObjectURL(image.src);
      renderPreviews(filesList, target); 
    });
    const listItem = document.createElement("li");
    listItem.appendChild(image);
    listItem.appendChild(myButtonRemove);
    target.appendChild(listItem);
  });
}
function deleteArrayElementByValue(list, value) {
  return list.filter((item) => item !== value);
}

fileInputMulti.addEventListener("change", (event) => {
  filesList = Array.from(event.target.files);
  renderPreviews(filesList, multiSelectorUniqPreview, fileInputMulti);
});
