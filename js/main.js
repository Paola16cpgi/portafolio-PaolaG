// Acceder a los elementos
const button = document.getElementById('toggle-mode');
const header = document.querySelector('header');
const sobreMi = document.getElementById('sobre-mi'); // Nueva referencia
const habilidades=document.getElementById('Habilidades');
const porta=document.getElementById('Portafolio');
const expe=document.getElementById('exper');
const hob=document.getElementById('hobi');

// Verificar si hay un modo guardado en localStorage
if (localStorage.getItem('mode') === 'night') {
    header.classList.add('night-mode');
    header.classList.remove('day-mode');
    sobreMi.classList.add('night-mode'); // Aplica el modo noche a "sobre mí"
    sobreMi.classList.remove('day-mode');
    habilidades.classList.add('night-mode'); // Aplica el modo noche a "sobre mí"
    habilidades.classList.remove('day-mode');
    porta.classList.add('night-mode'); // Aplica el modo noche a "sobre mí"
    porta.classList.remove('day-mode');
    expe.classList.add('night-mode'); // Aplica el modo noche a "sobre mí"
    expe.classList.remove('day-mode');
    hob.classList.add('night-mode'); // Aplica el modo noche a "sobre mí"
    hob.classList.remove('day-mode');
    button.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
    header.classList.add('day-mode');
    header.classList.remove('night-mode');
    sobreMi.classList.add('day-mode'); // Aplica el modo día a "sobre mí"
    sobreMi.classList.remove('night-mode');
    habilidades.classList.add('day-mode'); // Aplica el modo día a "sobre mí"
    habilidades.classList.remove('night-mode');
    porta.classList.add('day-mode'); // Aplica el modo día a "sobre mí"
    porta.classList.remove('night-mode');
    expe.classList.add('day-mode'); // Aplica el modo día a "sobre mí"
    expe.classList.remove('night-mode');
    hob.classList.add('day-mode'); // Aplica el modo día a "sobre mí"
    hob.classList.remove('night-mode');
    button.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

// Cambiar el modo al hacer clic
button.addEventListener('click', () => {
    header.classList.toggle('day-mode');
    header.classList.toggle('night-mode');
    sobreMi.classList.toggle('day-mode'); // Alterna el modo en "sobre mí"
    sobreMi.classList.toggle('night-mode');
    habilidades.classList.toggle('day-mode'); // Alterna el modo en "sobre mí"
    habilidades.classList.toggle('night-mode');
    porta.classList.toggle('day-mode'); // Alterna el modo en "sobre mí"
    porta.classList.toggle('night-mode');
    expe.classList.toggle('day-mode'); // Alterna el modo en "sobre mí"
    expe.classList.toggle('night-mode');
    hob.classList.toggle('day-mode'); // Alterna el modo en "sobre mí"
    hob.classList.toggle('night-mode');

    // Cambiar el texto del botón
    if (header.classList.contains('day-mode')) {
        button.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('mode', 'day');
    } else {
        button.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('mode', 'night');
    }
});
