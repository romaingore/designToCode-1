import './style.css'

const heartBtn = document.getElementById('heart-btn');
const heartIcon = document.getElementById('heart-icon');

heartBtn.addEventListener('click', () => {
    // Utilise getAttribute pour obtenir le chemin relatif du fichier image
    if (heartIcon.getAttribute('src') === './assets/images/heart.svg') {
        heartIcon.setAttribute('src', './assets/images/heart-plein.svg'); // Remplace par l'image remplie
    } else {
        heartIcon.setAttribute('src', './assets/images/heart.svg'); // Remplace par l'image vide
    }
});


