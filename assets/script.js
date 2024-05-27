// DECLARATION DES VARIABLES GLOBALES

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	}, // Index 0
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	}, // Index 1
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	}, // Index 2
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	} // Index 3
];

let currentIndex = 0;
const dots = document.querySelector('.dots');


// LOGIQUE D'EXECUTION DU CODE LORSQUE LE DOM EST CHARGE

document.addEventListener("DOMContentLoaded", function() {

	document.querySelector('.arrow_right').addEventListener('click', nextSlide);
	document.querySelector('.arrow_left').addEventListener('click', prevSlide);

	// On boucle sur chaque slides.
	slides.forEach((slide, index) => {
		// On crée un span.
		const dot = document.createElement('span');
		// On lui ajoute la classe "dot".
		dot.classList.add('dot');
		// On ajoute l'évènement pour afficher la bonne slide lors du clic.
		dot.addEventListener('click', () => {
			currentIndex = index;
			renderSlide();
		});
		dots.appendChild(dot);
	});

	renderSlide();
});


// DECLARATION DES FONCTIONS

function renderSlide() {
	const slide = slides[currentIndex];
	// On récupère l'image.
	const banner = document.querySelector(".banner-img");
	// On récupère le paragraphe suivant l'image.
	const headline = banner.nextElementSibling;
	// On change la source de l'image par celle de la slide passée en paramètre de la fonction.
	banner.src = `./assets/images/slideshow/${slide.image}`;
	// On change le texte de l'image par celui de la slide passée en paramètre de la fonction.
	headline.innerHTML = slide.tagLine;
	// On boucle sur chacun des bullet point.
	Array.from(dots.children).forEach((dot, index) => {
		if (currentIndex === index) {
			// Si l'index correspond à l'index actuel, on lui ajoute la classe "dot_selected".
			dot.classList.add("dot_selected");
		} else {
			// Sinon, on lui retire.
			dot.classList.remove("dot_selected");
		}
	})
}

function nextSlide() {
	/* On peut utiliser l'opérateur ternaire pour réduire la quantité code : condition ? exprSiVrai : exprSiFaux;
	currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
	*/
	// On vérifie que l'index ne dépasse pas l'index maximum du nombre de slides.
	if (currentIndex < slides.length - 1) {
		// Si c'est le cas, on passe à la slide suivante.
		currentIndex += 1;
	} else {
		// Sinon, on retourne à la première slide.
		currentIndex = 0;
	}
	renderSlide();
}

function prevSlide() {
	if (currentIndex > 0) {
		currentIndex -= 1;
	} else {
		currentIndex = slides.length - 1;
	}
	renderSlide();
}