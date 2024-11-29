const loginForm = document.querySelector(".formLogin");
const buscadorIndex = document.querySelector("#form-busqueda");

loginForm.addEventListener('submit', function(event) {
    
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const terminos = document.querySelector('#terminos').checked;
    event.preventDefault();

    if (email == "") {
        errores("E-Mail Invalido");
    } else {
        if (password == "") {
        errores("Contraseña Invalida");
        } else {
            if (!terminos) {
                errores("Aceptar TyC");
            }
        }
    }
});

let errorMensaje = "";

function errores(msj) {
    errorMensaje = msj
    document.querySelector('#errorMensaje').style.display = "block";
    document.querySelector('#errorMensaje').innerHTML = errorMensaje;
}

buscadorIndex.addEventListener('submit', function(event) {

    const inputBusqueda = document.querySelector('#input-busqueda').value;

    if (inputBusqueda == "") {
        alert("El buscador esta vacío, probá poniendo texto.");
        event.preventDefault();
    }

    if (inputBusqueda.length <= 3) {
        alert("Acordate que el buscador tiene que tener más de 3 caracteres.");
        event.preventDefault();
    }
});