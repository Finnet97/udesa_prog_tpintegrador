const categoriesPerPress = 12;
let startIndex = 0; 

const categoriaContainer = document.querySelector(".categories");
const btnCargarMasCats = document.querySelector("btn-cargar-mas-categories");
const buscadorIndex = document.querySelector("form-busqueda");

fetch(`https://dummyjson.com/recipes/tags`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        cargarCategorias(data);
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });

btnCargarMasCats.addEventListener("click", function() {
    fetch(`https://dummyjson.com/recipes/tags`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        cargarCategorias(data);
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
});

function cargarCategorias(data) {
    let cat = "";

    for (let i = startIndex; i < startIndex + categoriesPerPress && i < data.length; i++) {
        const categoria = data[i];

        cat += `
            <a href="./category.html?category=${encodeURIComponent(categoria)}">
                <article>
                    <p>${categoria}</p>
                </article>
            </a>
        `;
    }

    startIndex += categoriesPerPress; 
    categoriaContainer.innerHTML += cat;
}

buscadorIndex.addEventListener('submit', function(event) {

    const inputBusqueda = document.querySelector('input-busqueda').value.trim();

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