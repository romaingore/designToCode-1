import './style.css'

const heartBtn = document.getElementById('heart-btn');
const heartIcon = document.getElementById('heart-icon');

heartBtn.addEventListener('click', () => {
    // Utilise getAttribute pour obtenir le chemin relatif du fichier image
    if (heartIcon.getAttribute('src') === './public/images/heart.svg') {
        heartIcon.setAttribute('src', './public/images/heart-plein.svg'); // Remplace par l'image remplie
    } else {
        heartIcon.setAttribute('src', './public/images/heart.svg'); // Remplace par l'image vide
    }
});


