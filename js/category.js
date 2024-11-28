const buscadorIndex = document.getElementById("form-busqueda");

const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");

if (selectedCategory) {
    document.getElementById("categoria-nombre").textContent = selectedCategory
}

let aIndex = 0;
let recetasFiltradas = [];
const recetasPorPagina = 5;


if (selectedCategory) {
    fetch("https://dummyjson.com/recipes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let bIndex = 0;

            for (let i = 0; i < data.recipes.length; i++) {
                const recipe = data.recipes[i];

                if (recipe.tags) {
                    for (let j = 0; j < recipe.tags.length; j++) {
                        if (recipe.tags[j] === selectedCategory) {
                            recetasFiltradas[bIndex]=recipe;
                            bIndex++;
                            break;
                        }
                    }
                }
            }

            function cargarRecetas() {
                let recipesHTML = "";
                let finDelIndex = aIndex + recetasPorPagina;

                if (finDelIndex > recetasFiltradas.length){
                    finDelIndex = recetasFiltradas.length;
                }

                for (let i = aIndex; i < finDelIndex; i++){
                    const receta = recetasFiltradas[i];
                    recipesHTML += `
                        <a href="receta.html?id=${receta.id}" class="ver-detalle">
                            <article>
                                <img src="${receta.image || 'placeholder.jpg'}" alt="Imagen de ${receta.name}">
                                <h3>${receta.name || 'Nombre no disponible'}</h3>
                                <p> ${receta.difficulty || 'No especificado'}</p>
                            </article>
                        </a>
                    `;
                }

                document.querySelector(".category-container").innerHTML += recipesHTML;

                aIndex += recetasPorPagina;

                if (aIndex >= recetasFiltradas.length){
                    document.getElementById("cargarMas").style.display = 'none';
                } else {
                    document.getElementById("cargarMas").style.display = 'block';
                }
            }

            cargarRecetas();

            document.getElementById("cargarMas").addEventListener('click', cargarRecetas);

        })
        .catch(function(error) {
            document.querySelector(".category-container").innerHTML = `
                <p>Ocurrió un error al cargar las recetas. Por favor, intenta nuevamente.</p>
            `;
        });
} else {
    document.querySelector(".category-container").innerHTML = `
        <p>No se ha seleccionado ninguna categoría.</p>
    `;
}

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