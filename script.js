const cambiarImagen = () => {
  document.getElementById("maquinaArriba").src = "./imagenes/maquinaAbajo.jpg";
};

const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const imagen3 = document.getElementById("imagen3");
const resultado = document.getElementById("resultado");

const compis = ["compañera1.png", "compañera2.png", "compañera3.png"];
const simbolos = ["anillo.png", "beso.png", "cama.png", "cuchillo.png", "veneno.png", "viaje.png"];
const famosos = ["Angelina.png", "Danny.png", "David.png","Donatella.png", "JuanCar.png", "Lady.png","Meryl.png", "Pedro.png", "Santiago.png", "Vigo.png"];


function imagenesAleatorias (imagenes)
{
    const indiceAleatorio = Math.floor( Math.random() * imagenes.length )
    return imagenes[ indiceAleatorio]
}

funcion girar(){
    const compiImagen = getRandomImage( compis )
    const iconosImagen = getRandomImage( iconos )
    const famososImagen = getRandomImage( famosos )

}