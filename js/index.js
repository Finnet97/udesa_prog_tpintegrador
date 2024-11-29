let currentPage = 1;
const recipesPerPage = 12;

const recetaList = document.querySelector(".recetas-container");
const botonCargarMas = document.querySelector("btn-cargar-mas");
const buscadorIndex = document.querySelector("form-busqueda");

fetch(`https://dummyjson.com/recipes?skip=0&limit=${recipesPerPage}`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let recetas = "";

    for (let i = 0; i < data.recipes.length; i++) {
        const receta = data.recipes[i];

        recetas += `
            <a href="./receta.html?id=${receta.id}">
                <article>
                    <img src="${receta.image}" alt="${receta.name}">
                    <p>${receta.name}</p>
                    <p>${receta.difficulty}</p>
                </article>
            </a>
        `;
    }

    recetaList.innerHTML = recetas;

    if (data.recipes.length < recipesPerPage) {
        botonCargarMas.style.display = "none";
    }
})
.catch(function(error) {
    console.log("Error: " + error);
});

botonCargarMas.addEventListener("click", function() {
    currentPage++;

    fetch(`https://dummyjson.com/recipes?skip=${(currentPage - 1) * recipesPerPage}&limit=${recipesPerPage}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let recetas = "";

        for (let i = 0; i < data.recipes.length; i++) {
            const receta = data.recipes[i];

            recetas += `
                <a href="./receta.html?id=${receta.id}">
                    <article>
                        <img src="${receta.image}" alt="${receta.name}">
                        <p>${receta.name}</p>
                        <p>${receta.difficulty}</p>
                    </article>
                </a>
            `;
        }

        recetaList.innerHTML += recetas;

        if (data.recipes.length < recipesPerPage) {
            botonCargarMas.style.display = "none";
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburguerMenu = document.querySelector(".hamburguer-menu");
    const menu = document.querySelector(".menu");

    hamburguerMenu.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});

buscadorIndex.addEventListener('submit', function(event) {

    const inputBusqueda = document.querySelector('input-busqueda').value;

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