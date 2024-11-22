
const categoriesPerPress = 12;

const categoriaContainer = document.querySelector(".categories");
const btnCargarMasCats = document.getElementById("btn-cargar-mas-categories");

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
        let nuevasCats = "";

        for (let i = 0; i < categoriesPerPress; i++) {
            const categoria = data[i];

            nuevasCats += `
                <a href="./index.html">
                    <article>
                        <p>${categoria}</p>
                    </article>
                </a>
            `;
        }

        categoriaContainer.innerHTML += nuevasCats;
    })
    .catch(function(error) {
        console.log("Error: " + error);
    });
});