const loginForm = document.querySelector(".formLogin");
const buscadorIndex = document.getElementById("form-busqueda");

loginForm.addEventListener('submit', function(event) {
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value.trim()
    const terminos = document.getElementById('terminos').checked;

    let errorMensaje = "";

    if (email === "") {
        errorMensaje += "Ingrese su correo eletrónico"
        document.getElementById('errorMensaje').style.display = "block";
        document.getElementById('errorMensaje').innerHTML = errorMensaje;
        event.preventDefault();
        return;
    }

    if (password === "") {
        errorMensaje += "Ingrese su contraseña"
        document.getElementById('errorMensaje').style.display = "block";
        document.getElementById('errorMensaje').innerHTML = errorMensaje;
        event.preventDefault();
        return;
    }

    if (!terminos) {
        errorMensaje += "Acepte los Terminos y Condiciones"
        document.getElementById('errorMensaje').style.display = "block";
        document.getElementById('errorMensaje').innerHTML = errorMensaje;
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