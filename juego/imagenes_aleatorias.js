document.addEventListener("DOMContentLoaded", () => {
    const imagenCompis = document.getElementById("imagen_compis");
    const imagenIconos = document.getElementById("imagen_iconos");
    const imagenFamosos = document.getElementById("imagen_famosos");

    const compis = []; // Array para almacenar las imágenes de compis

    // Función para manejar el evento de cambio en el input de tipo file
    document.getElementById('archivos').addEventListener('change', (event) => {
        const archivos = event.target.files;
        const tipo = document.querySelector('option:checked').value;
        // Leer cada archivo seleccionado y agregarlo al array correspondiente
        for (let i = 0; i < archivos.length; i++) {
            const reader = new FileReader();
            reader.onload = function (e) {
                switch (tipo) {
                    case 'compis':
                        compis.push(e.target.result); // Agregar la imagen leída al array
                        imagenCompis.src = e.target.result; // Mostrar la imagen cargada
                        break;
                    case 'iconos':
                        // Agregar lógica para manejar las imágenes de iconos
                        break;
                    case 'famosos':
                        // Agregar lógica para manejar las imágenes de famosos
                        break;
                    default:
                        break;
                }
            }
            reader.readAsDataURL(archivos[i]); // Leer el archivo como una URL de datos
        }
    });
});


  const simbolos = [
    "anillo.png",
    "beso.png",
    "cama.png",
    "cuchillo.png",
    "veneno.png",
    "viaje.png",
  ];
  const famosos = [
    "Angelina.png",
    "Danny.png",
    "David.png",
    "Donatella.png",
    "JuanCar.png",
    "Lady.png",
    "Meryl.png",
    "Pedro.png",
    "Santiago.png",
    "Vigo.png",
  ];

  // Función para obtener una imagen aleatoria del array dado
  function imagenesAleatorias(imagenes) {
    const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    return imagenes[indiceAleatorio];
  }


//  document.addEventListener("DOMContentLoaded", () => {
//    const archivos_input = document.getElementById("archivos");
//    const imagen1 = document.getElementById("imagen1");
//    const imagen2 = document.getElementById("imagen2");
//    const imagen3 = document.getElementById("imagen3");
//    const resultado = document.getElementById("resultado");

//    let compis = [ ];

//    archivos_input.addEventListener("change", (event) => {
//      const archivos = Array.from(event.target.files);
//      compis = compis.concat(archivos);
//      console.log(compis);

//      // Mostrar imágenes aleatorias
//      imagen1.src = imagenesAleatorias(compis);
//      imagen2.src = imagenesAleatorias(simbolos);
//      imagen3.src = imagenesAleatorias(famosos);
//    });

//    const simbolos = [
//      "anillo.png",
//      "beso.png",
//      "cama.png",
//      "cuchillo.png",
//      "veneno.png",
//      "viaje.png",
//    ];
//    const famosos = [
//      "Angelina.png",
//      "Danny.png",
//      "David.png",
//      "Donatella.png",
//      "JuanCar.png",
//      "Lady.png",
//      "Meryl.png",
//      "Pedro.png",
//      "Santiago.png",
//      "Vigo.png",
//    ];

//    function imagenesAleatorias(imagenes) {
//      const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
//      return imagenes[indiceAleatorio].name; // Cambiar a 'name' si deseas obtener el nombre del archivo
//    }
//  } );
