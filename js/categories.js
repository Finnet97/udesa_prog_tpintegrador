const categoriesPerPress = 12;
let startIndex = 0; 

const categoriaContainer = document.querySelector(".categories");
const btnCargarMasCats = document.getElementById("btn-cargar-mas-categories");

fetch(`https://dummyjson.com/recipes/tags`)
    .then(response => response.json())
    .then(data => {
        cargarCategorias(data);
    })
    .catch(error => {
        console.log("Error: " + error);
    });

btnCargarMasCats.addEventListener("click", function() {
    fetch(`https://dummyjson.com/recipes/tags`)
        .then(response => response.json())
        .then(data => {
            cargarCategorias(data);
        })
        .catch(error => {
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