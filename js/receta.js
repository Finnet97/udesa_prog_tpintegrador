
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

    // container principal
    let imagen = document.querySelector(".imagen-receta");
    let nombre = document.querySelector(".nombre-receta");
    let instrucciones = document.querySelector(".instrucciones-receta");
    let tiempo = document.querySelector(".tiempo-receta");
    let categoria = document.querySelector(".categoria-receta");

    // container ingredientes
    let ingredientes = document.querySelector(".detalles-ingredientes");

    // container dificultad
    let diff = document.querySelector(".detalles-diff");
    let cal = document.querySelector(".detalles-cal");
    let serv = document.querySelector(".detalles-servings");

    imagen.src = data.image;
    nombre.textContent = data.name;

    instrucciones.textContent = '';

    for (let instruccion = 0; instruccion < data.instructions.length; instruccion++) {
        const recetaInstruccion = data.instructions[instruccion];
        instrucciones.innerHTML += `<p>${instruccion + 1}. ${recetaInstruccion}</p>`;  
    }

    tiempo.textContent = `${data.cookTimeMinutes} minutos`;  

    categoria.textContent = '';
    categoria.innerHTML += `<a href='./categories.html'>${data.cuisine}</a>`;

    ingredientes.textContent = '';

    for (let ingrediente = 0; ingrediente < data.ingredients.length; ingrediente++) {
        const recetaInsgrediente = data.ingredients[ingrediente];
        ingredientes.innerHTML += `<p>${ingrediente + 1}. ${recetaInsgrediente}</p>`;  
    }

    diff.textContent = data.difficulty;
    cal.textContent = `${data.caloriesPerServing} kcal`;
    if (data.servings >= 1) {
        serv.textContent = `${data.servings} Porciones`;
    } else {
        serv.textContent = `${data.servings} Porcion`;
    }
})
.catch(function(error) {
    console.log("Error: " + error);
});