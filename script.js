// Seleccionar el elemento body del documento
const body = document.querySelector("body");

// Seleccionar el elemento con el id "toggle"
const toggle = document.getElementById("toggle");

// Agregar un evento de clic al toggle
toggle.addEventListener('click', () => {
    // Alternar la clase "toggleBlanco" en el elemento toggle
    toggle.classList.toggle("toggleBlanco");

    // Alternar la clase "toggleBlanco" en el elemento body
    body.classList.toggle("toggleBlanco");
});
