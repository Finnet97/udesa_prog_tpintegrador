
const buscadorIndex = document.getElementById("form-busqueda");

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
    let instruccionesLista = document.querySelector(".instrucciones-lista");
    let tiempo = document.querySelector(".tiempo-receta");
    let categoria = document.querySelector(".categoria-receta");

    let ingredientesLista = document.querySelector(".detalles-ingredientes");
    let diff = document.querySelector(".detalles-diff");
    let cal = document.querySelector(".detalles-cal");
    let serv = document.querySelector(".detalles-servings");
    let tagsLista = document.querySelector(".tags-list");
    let rating = document.querySelector(".detalles-rating");
    let reviews = document.querySelector(".detalles-reviews");

    imagen.src = data.image;
    nombre.innerHTML = data.name;

    instruccionesLista.innerHTML = '';
    for (let i = 0; i < data.instructions.length; i++) {
        instruccionesLista.innerHTML += `<h3>${i + 1}. ${data.instructions[i]}</h3>`;
    }

    tiempo.innerHTML = `${data.cookTimeMinutes} minutos`;

    categoria.innerHTML = data.cuisine
    ? `<a href='./category.html?category=${encodeURIComponent(data.cuisine)}'>${data.cuisine}</a>`
    : "Categoría no especificada";

    ingredientesLista.innerHTML = '';
    for (let i = 0; i < data.ingredients.length; i++) {
        ingredientesLista.innerHTML += `<h3>${i + 1}. ${data.ingredients[i]}</h3>`;
    }

    diff.innerHTML = data.difficulty;

    cal.innerHTML = `${data.caloriesPerServing} kcal`;

    if (data.servings >= 1) {
        serv.innerHTML = `${data.servings} Porciones`;
    } else {
        serv.innerHTML = `${data.servings} Porción`;
    }

    tagsLista.innerHTML = '';
    for (let i = 0; i < data.tags.length; i++) {
        tagsLista.innerHTML += `<p>${data.tags[i]}</p>`;
    }

    rating.innerHTML = data.rating;
    reviews.innerHTML = `${data.reviewCount} reseñas`;
})
.catch(function(error) {
    console.log("Error: " + error);
});

buscadorIndex.addEventListener('submit', function(event) {

    const inputBusqueda = document.getElementById('input-busqueda').value.trim();

    if (inputBusqueda === "") {
        alert("El buscador esta vacío, probá poniendo texto.");
        event.preventDefault();
        return;
    }

    if (inputBusqueda.length <= 3) {
        alert("Acordate que el buscador tiene que tener más de 3 caracteres.");
        event.preventDefault();
        return;
    }
});