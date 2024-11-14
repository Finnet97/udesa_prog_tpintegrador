
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
    instrucciones.textContent = data.instructions;  
    tiempo.textContent = `${data.cookTimeMinutes} minutos`;  
    categoria.textContent = data.cuisine; 
})
.catch(function(error) {
    console.log("Error: " + error);
});
