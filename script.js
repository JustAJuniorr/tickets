// Lista de personas
const personas = ["Carolina", "Yannick", "Jeisson", "Ronald", "Nathalia", "Pablo", "Emanuel", "Brandon", "Alexander", "Jasiel", "David", "Alonso", "Federico", "Juan David"];

let currentIndex = 0;

const nombrePersonaElement = document.getElementById("nombrePersona");
const siguienteBtn = document.getElementById("siguienteBtn");

function mostrarSiguientePersona() {
    currentIndex = (currentIndex + 1) % personas.length;
    nombrePersonaElement.textContent = personas[currentIndex];
}

siguienteBtn.addEventListener("click", mostrarSiguientePersona);

// Mostrar la primera persona al cargar la página
mostrarSiguientePersona();