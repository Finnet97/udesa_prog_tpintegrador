
let currentPage = 1;
const recipesPerPage = 12;

const categoriaContainer = document.querySelector(".categories");
const btnCargarMasCats = document.getElementById("btn-cargar-mas");

fetch(`https://dummyjson.com/recipes/tags`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let cat = "";

    for (let i = 0; i < 24; i++) {
        const categoria = data[i];
        
        cat += `
            <a href="./index.html">
                <article>
                    <p>${categoria}</p>
                </article>
            </a>
        `;
    }

    categoriaContainer.innerHTML += cat;

    if (data.length >= tags.length) {
        loadMoreBtn.style.display = "none";
    }
})
.catch(function(error) {
    console.log("Error: " + error);
});

btnCargarMasCats.addEventListener("click", function() {
    currentPage++;

    fetch(`https://dummyjson.com/recipes/tags`)
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