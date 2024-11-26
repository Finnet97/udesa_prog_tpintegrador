
const loginForm = document.querySelector(".formLogin");
const buscadorIndex = document.getElementById("form-busqueda");

loginForm.addEventListener('submit', function(event) {
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()
    const terminos = document.getElementById('terminos').checked;

    // Todo esto despues hay que cambiarlo para que no use alert
    // La verdad ni idea que podemos hacer, una funcion separada?
    if (email === "") {
        alert("Email test")
        event.preventDefault();
        return;
    }

    if (password === "") {
        alert("Pasword test")
        event.preventDefault();
        return;
    }

    if (!terminos) {
        alert("Checkbox test")
        event.preventDefault();
        return;
    }
});

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