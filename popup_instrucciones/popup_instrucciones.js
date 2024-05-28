let filesList = [];
const fileInputMulti = document.querySelector("#archivos");
const multiSelectorUniqPreview = document.querySelector("#preview");


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
    target.innerHTML = ""; // Limpiar la lista antes de agregar nuevos archivos
    currentFileList.forEach(file => {
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file); // Crea una URL para la imagen
        image.classList.add("preview-image"); // Agrega una clase para estilos opcionales
        const myButtonRemove = document.createElement("button");
        myButtonRemove.textContent = "X";
        myButtonRemove.addEventListener("click", () => {
            filesList = deleteArrayElementByValue(filesList, file); // Eliminar el archivo de filesList
            URL.revokeObjectURL(image.src); // Revoca la URL de la imagen para liberar memoria
            renderPreviews(filesList, target); // Renderizar la lista actualizada
        });
        const listItem = document.createElement("li");
        listItem.appendChild(image);
        listItem.appendChild(myButtonRemove);
        target.appendChild(listItem);
    });
}
function deleteArrayElementByValue(list, value) {
    return list.filter(item => item !== value);
}

fileInputMulti.addEventListener("change", event => {
    filesList = Array.from(event.target.files);
    renderPreviews(filesList, multiSelectorUniqPreview, fileInputMulti);
});
