
const loginForm = document.querySelector(".formLogin");
const buscadorIndex = document.getElementById("form-busqueda");

loginForm.addEventListener('submit', function(event) {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email === "") {
        alert("El campo del e-mail no puede estar vacío");
        event.preventDefault();
        return;
    }

    // Verificar si el campo de contraseña está vacío
    if (password === "") {
        alert("El campo de la contraseña no puede estar vacío");
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