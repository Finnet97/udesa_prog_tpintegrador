
fetch('https://dummyjson.com/recipes')

.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);

    const recetaList = document.querySelector(".recetas-container");

    let recetas = "";

    for (let i = 0; i < 12; i++) {
        const receta = data.recipes[i];

        recetas += `
            <a href="">
                <article>
                    <img src="${receta.image}" alt="${receta.name}">
                    <p>${receta.name}</p>
                    <p>${receta.difficulty}</p>
                </article>
            </a>
        `;
    }

    recetaList.innerHTML = recetas;
})
.catch(function(error) {
    console.log("Error: " + error);
});