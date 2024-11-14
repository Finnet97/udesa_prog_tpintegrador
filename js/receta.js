
let qs = location.search;
let qsObj = new URLSearchParams(qs);

const recetaID = qsObj.get("id");
console.log(recetaID);

fetch(`https://dummyjson.com/recipes/${recetaID}`)

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);

    let imagen = document.querySelector(".imagen-receta");
    let nombre = document.querySelector(".nombre-receta");
    let instrucciones = document.querySelector(".instrucciones-receta");
    let tiempo = document.querySelector(".tiempo-receta");
    let categoria = document.querySelector(".categoria-receta");

    imagen.src = data.image;
    nombre.textContent = data.name;

    // Limpiar instrucciones antes de agregar
    instrucciones.textContent = '';

    // Iterar y añadir instrucciones al contenedor
    for (let i = 0; i < data.instructions.length; i++) {
        const recetaInstruccion = data.instructions[i];
        instrucciones.innerHTML += `<p>${i + 1}. ${recetaInstruccion}</p>`;  
    }

    tiempo.textContent = `${data.cookTimeMinutes} minutos`;  
    categoria.textContent = data.cuisine;
})
.catch(function(error) {
    console.log("Error: " + error);
});