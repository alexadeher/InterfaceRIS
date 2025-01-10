// Función para mostrar u ocultar la contraseña
function togglePassword(id) {
    const passwordField = document.getElementById(id);
    const toggleIcon = document.getElementById('toggle' + capitalizeFirstLetter(id));

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
