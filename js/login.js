
const loginForm = document.querySelector(".formLogin");

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