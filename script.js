// Tableau de citations

let quotes = [
  {
    auteur: "Albert Einstein",
    quote:
      "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
  },
  {
    auteur: "Mahatma Gandhi",
    quote: "Soyez le changement que vous voulez voir dans le monde.",
  },
  {
    auteur: "Mark Twain",
    quote: "Ils ne savaient pas que c'était impossible, alors ils l'ont fait.",
  },
  {
    auteur: "Nelson Mandela",
    quote: "Cela semble toujours impossible jusqu'à ce qu'on le fasse.",
  },
  {
    auteur: "Confucius",
    quote:
      "La vie est vraiment simple, mais nous insistons à la rendre compliquée.",
  },
  {
    auteur: "Aristote",
    quote:
      "L'excellence n'est jamais un accident. C'est toujours le résultat d'une intention élevée, d'un effort sincère et d'une exécution intelligente.",
  },
  {
    auteur: "Winston Churchill",
    quote:
      "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
  },
  {
    auteur: "Socrate",
    quote: "La seule vraie sagesse est de savoir que vous ne savez rien.",
  },
  {
    auteur: "Lao Tseu",
    quote: "Un voyage de mille lieues commence toujours par un premier pas.",
  },
  {
    auteur: "Martin Luther King Jr.",
    quote:
      "La question la plus persistante et urgente de la vie est : que faites-vous pour les autres ?",
  },
];
// Variables
let index = 0;
let citation = document.querySelector(".citation");
let auteur = document.querySelector(".auteur");

// Boutons
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

// écouter des evenements
btn1.addEventListener("click", change);

// Fonctions
function change() {
  citation.textContent = quotes[index].quote;
  auteur.textContent = quotes[index].auteur;
}

function nextButton() {
  index++;
  if (index > quotes.length - 1) {
    index = 0;
  }
  change();
}

function prevButton() {
  index--;
  if (index < 0) {
    index = quotes.length - 1;
  }
  change();
}

// Ecouter des evenements
btn1.addEventListener("click", nextButton);
btn2.addEventListener("click", prevButton);
