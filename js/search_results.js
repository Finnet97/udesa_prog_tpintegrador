document.addEventListener("DOMContentLoaded", function() {
    const formBusqueda = document.querySelector("#form-busqueda"); 
    const inputBusqueda = document.querySelector("#input-busqueda");
    const recetasContainer = document.querySelector(".recetas-container"); 
    const btnCargarMas = document.querySelector("#btn-cargar-mas"); 

    let paginaActual = 1; 
    const recetasPorPagina = 10; 

    function cargarRecetas(busqueda = "", pagina = 1) {
        const url = `https://dummyjson.com/recipes/search?q=${busqueda}&limit=${recetasPorPagina}&skip=${(pagina - 1) * recetasPorPagina}`;
        
        fetch(url)
            .then(function(response) {
                return response.json(); 
            })
            .then(function(data) {
                if (data.recipes && data.recipes.length > 0) {
                    mostrarRecetas(data.recipes);
                    btnCargarMas.style.display = "block";
                } else {
                    if (pagina === 1) {
                        recetasContainer.innerHTML = "<p>No se encontraron recetas.</p>";
                    } else {
                        alert("No hay más recetas para cargar.");
                        btnCargarMas.style.display = "none"; 
                    }
                }
            })
            .catch(function(error) {
                console.error("Error al cargar recetas:", error);
                recetasContainer.innerHTML = "<p>Ocurrió un error al cargar las recetas.</p>";
            });
    }

    function mostrarRecetas(recetas) {
        recetas.forEach(function(receta) {
            const recetaHTML = `
                <a href="./receta.html?id=${receta.id}">
                    <article>
                        <img src="${receta.image}" alt="${receta.name}">
                        <p>${receta.name}</p>
                        <p>${receta.difficulty}</p>
                    </article>
                </a>
                `;
            recetasContainer.innerHTML += recetaHTML;
        });
    }

    formBusqueda.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const busqueda = inputBusqueda.value; 
        if (busqueda) {
            recetasContainer.innerHTML = ""; 
            paginaActual = 1; 
            cargarRecetas(busqueda, paginaActual);
            btnCargarMas.style.display = "block"; 
        }
    });

    btnCargarMas.addEventListener("click", function() {
        const busqueda = inputBusqueda.value; 
        paginaActual++;
        cargarRecetas(busqueda, paginaActual);
    });

    const params = new URLSearchParams(window.location.search);
    const busquedaInicial = params.get("buscador");
    if (busquedaInicial) { 
        inputBusqueda.value = busquedaInicial; 
        cargarRecetas(busquedaInicial, paginaActual); 
    } else { 
        cargarRecetas(); 
    };
});