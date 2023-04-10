
const quote = document.getElementById("quote");

const question0 = document.getElementById("hitMe");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const question5 = document.getElementById("question5");
const question6 = document.getElementById("question6");
let i = 0;
let numberOfHits = 0;

let array = ["Cliquez sur les questions, pas MOI.",
            "Aïe !",
            "Outch !",
            "Qu'est-ce que je vous ai fait ?",
            "Ourf !",
            "J'ai un chat à nourrir, pitié !",
            "Que quelqu'un appelle la police !",
            "Que quelqu'un appelle le samu !",
            "Que quelqu'un appelle quelqu'un !",
            "Dites à mes parents que je les aimais.",
            ".",
            "Et bah on peut dire que vous aimez cliquer, vous !"];


/*Ajoute l'effet de défilement de l'écriture */
function typeWriter() {
  let speed = 15;
  if (i < answer.length) {
    quote.innerHTML += answer.charAt(i);
    if (answer.charAt(i) == ".") {
      quote.innerHTML += "</br>";
    };
    i++;
    setTimeout(typeWriter, speed);
  }
  else if (i == answer.length) {
    i = 0;
    answer="";
  }
}


/*Ajoute la bonne réponse associée à la question et incorpore l'effet Typewriter */
function write (question) {
  quote.innerHTML = "";
  i = 0;
  if (question == 1) {
    answer = "Bonjour, cliquez sur les questions, je vous répondrai.";
  }
  else if (question == question0) {
 if (numberOfHits < array.length) {
  answer = array[numberOfHits];
  numberOfHits ++;
 }
 else {
  numberOfHits = 0;
 };
  }
  else if (question == question1) {
    answer = "Je me nomme Mathieu, Gérard Mathieu. J'ai 31 ans et j'habite dans un charmant village nommé Saint-Germain Lespinasse, dans la Loire. J'aime le cinéma, la littérature, l'informatique, l'astronomie et aussi pousser des haltères à la salle. Oh et J'ADORE les sushis.";
  }
  else if (question == question2) {
    answer = "J'étais autrefois technicien préparateur dans un laboratoire d'analyse d'amiante (AC Environnement), j'y suis resté un peu plus de cinq ans. J'avais aussi les fonctions de tuteur en préparation, référent sécurité et réceptionniste. ";
  }
  else if (question == question3) {
    answer = "J'ai toujours été passionné par l'informatique et l'univers du multimédia. Adolescent, je touchais déjà au HTML et CSS des forums sur lesquels j'étais admin. J'ai aussi effectué dernièrement pas mal de cours sur Openclassrooms, afin d'étoffer mes compétences en programmation.";
  }
  else if (question == question4) {
    answer = "Oui, je recherche actuellement une formation dans le développement web. L'idéal serait une formation à distance et inférieure à un an. Je suis aussi disponible pour l'aternance, si on me propose des offres de contrat de professionnalisation.";
  }
  else if (question == question5) {
    answer = "En diplôme, j'ai obtenu le baccalauréat scientifique en 2010. J'ai aussi effectué de nombreux cours en ligne sur Openclassrooms. Ainsi, je maîtrise les bases du HTML, CSS, Javascript, PHP et Mysql. Je sais aussi me servir de Git et Github.";
  }
else if (question == question6) {
  answer = "Elle s'appelle Oumi. Mais bon, ce n'est pas une information importante. Revenons au coeur du sujet s'il vous plaît.";
};
  typeWriter();
}

window.addEventListener("DOMContentLoaded", (event) => {
  const start = 1;
  write(start);
});
question0.addEventListener("click", function () {
  write(question0);
})
question1.addEventListener("click", function() {
  write(question1);
});
question2.addEventListener("click", function() {
    write(question2);
});
question3.addEventListener("click", function () {
    write(question3);
});
question4.addEventListener("click", function () {
    write(question4);
});
question5.addEventListener("click", function () {
  write(question5);
});
question6.addEventListener("click", function () {
  write(question6);
});