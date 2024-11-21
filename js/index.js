
let currentPage = 1;
const recipesPerPage = 12;

const recetaList = document.querySelector(".recetas-container");
const btnCargarMas = document.getElementById("btn-cargar-mas");

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
        btnCargarMas.style.display = "none";
    }
})
.catch(function(error) {
    console.log("Error: " + error);
});

btnCargarMas.addEventListener("click", function() {
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
            btnCargarMas.style.display = "none";
        }
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
});