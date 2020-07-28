// MENU

let ouvrirMenu = document.querySelector("#ouvrir-menu");
let fermerMenu = document.querySelector("#fermer-menu");
let navbar = document.querySelector("#navbar");
let navlinks = document.querySelectorAll(".nav-links");

ouvrirMenu.addEventListener("click", () => {
	navbar.style.display = "flex";
});

fermerMenu.addEventListener("click", () => {
	navbar.style.display = "none";
});

navlinks.forEach(navlink => navlink.addEventListener("click", () => {
	navbar.style.display = "none";
}));




// TARIFS

let tarifs = document.querySelectorAll(".tarifs-bouton");
let inscription = document.querySelector("#tarifs-details");
let fermerInscription = document.querySelector("#fermer-inscription");

tarifs.forEach(tarif => tarif.addEventListener("click", () => {
	inscription.style.display = "flex";
}));

fermerInscription.addEventListener("click", () => {
	inscription.style.display = "none";
});




// MENTIONS LEGALES

let ouvrirMentions = document.querySelector("#ouvrir-mentions");
let fermerMentions = document.querySelector("#fermer-mentions");
let mentions = document.querySelector("#mentions-legales");

ouvrirMentions.addEventListener("click", () => {
	if (mentions.style.display === "none") {
		mentions.style.display = "flex";
		window.location.href = "#mentions-legales";
	} else {
		mentions.style.display = "none"
	}
});

fermerMentions.addEventListener("click", () => {
	mentions.style.display = "none"
});
