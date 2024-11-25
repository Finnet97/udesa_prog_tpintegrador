const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");

if (selectedCategory) {
    fetch("https://dummyjson.com/recipes")
        .then(response => response.json())
        .then(data => {
            const recetasFiltradas = data.recipes.filter(recipe =>
                recipe.tags && recipe.tags.includes(selectedCategory)
            );

            if (recetasFiltradas.length > 0) {
                let recipesHTML = "";

                recetasFiltradas.forEach(recipe => {
                    recipesHTML += `
                        <article>
                            <img src="${recipe.image || 'placeholder.jpg'}" alt="Imagen de ${recipe.name}">
                            <h3>${recipe.name || 'Nombre no disponible'}</h3>
                            <p>Nivel de dificultad: ${recipe.difficulty || 'No especificado'}</p>
                            <a href="receta.html?id=${recipe.id}" class="ver-detalle">Ver detalle</a>
                        </article>
                    `;
                });

                document.querySelector(".recetas-container").innerHTML = recipesHTML;
            } else {
                document.querySelector(".recetas-container").innerHTML = `
                    <p>No hay ninguna comida con la categoría seleccionada.</p>
                `;
            }
        })
        .catch(error => {
            document.querySelector(".recetas-container").innerHTML = `
                <p>Ocurrió un error al cargar las recetas. Por favor, intenta nuevamente.</p>
            `;
        });
} else {
    document.querySelector(".recetas-container").innerHTML = `
        <p>No se ha seleccionado ninguna categoría.</p>
    `;
}