
const loginForm = document.querySelector(".formLogin");

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