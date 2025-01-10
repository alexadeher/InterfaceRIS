document.addEventListener("DOMContentLoaded", () => {
    const jwt = localStorage.getItem("jwt");

    // Si no existe el token, redirige al login
    if (!jwt) {
        window.location.href = "login.html";
    }
});

function logout(event) {
    localStorage.removeItem("jwt");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("role");
    window.location.href = "login.html";
}