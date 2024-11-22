
const categoria = document.getElementById(".categories");

fetch(`https://dummyjson.com/recipes`)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    let categoria = "";

    for (let i = 0; i < data.recipes.length; i++) {
        const categoria = data.recipes[i];

        categoria += `
            <a href="./receta.html?id=${categoria.id}">
                <article>
                    <img src="${categoria.image}" alt="${categoria.name}">
                    <p>${categoria.cuisine}</p>
                </article>
            </a>
        `;
    }

    recetaList.innerHTML = categoria;
})
.catch(function(error) {
    console.log("Error: " + error);
});
