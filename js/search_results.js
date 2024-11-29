document.addEventListener("DOMContentLoaded", () => {
    const formBusqueda = document.querySelector("#form-busqueda");
    const inputBusqueda = document.querySelector("#input-busqueda");
    const recetasContainer = document.querySelector("#recetas-container");

    // Función para renderizar recetas
    function renderRecetas(recipes) {
        let recetas = "";

        for (let i = 0; i < recipes.length; i++) {
            const receta = recipes[i];

            recetas += `
                <a href="./receta.html?id=${receta.id}">
                    <article>
                        <img src="${receta.image}" alt="${receta.title}">
                        <p>${receta.name}</p>
                        <p>Dificultad: ${receta.difficulty || "Desconocida"}</p>
                    </article>
                </a>
            `;
        }

        recetasContainer.innerHTML = recetas || "<p>No se encontraron recetas con ese término.</p>";
    }

    // Evento para manejar la búsqueda
    formBusqueda.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto
        const query = inputBusqueda.value.trim().toLowerCase(); // Convertir a minúsculas
        if (query === "") {
            alert("Por favor, ingresa un término de búsqueda.");
            return;
        }

        try {
            // Llamar a la API para obtener las recetas
            const response = await fetch(`https://dummyjson.com/recipes/search?q=${query}`);
            const data = await response.json();

            if (response.ok) {
                renderRecetas(data.recipes || []);
            } else {
                console.error("Error al buscar recetas:", data.message);
                recetasContainer.innerHTML = "<p>Ocurrió un error al realizar la búsqueda.</p>";
            }
        } catch (error) {
            console.error("Error de red o API:", error);
            recetasContainer.innerHTML = "<p>Ocurrió un error al conectarse con el servidor.</p>";
        }
    });
});
