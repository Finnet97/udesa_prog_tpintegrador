const buscadorIndex = document.getElementById("form-busqueda");

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
                    <a href="receta.html?id=${recipe.id}" class="ver-detalle">
                        <article>
                            <img src="${recipe.image || 'placeholder.jpg'}" alt="Imagen de ${recipe.name}">
                            <h3>${recipe.name || 'Nombre no disponible'}</h3>
                            <p> ${recipe.difficulty || 'No especificado'}</p>
                        </article>
                    </a>
                    `;
                });

                document.querySelector(".category-container").innerHTML = recipesHTML;
            } else {
                document.querySelector(".category-container").innerHTML = `
                    <p>No hay ninguna comida con la categoría seleccionada.</p>
                `;
            }
        })
        .catch(error => {
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