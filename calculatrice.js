let choix;
let premierNombre;
let deuxiemeNombre;
let resultat;
do {
  choix = Number(
    prompt(
      "Que souhaitez-vous faire \n\n1 - Addition\n2 - Multiplication\n3 - Soustraction\n4 - Division"
    )
  );
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

do {
  premierNombre = Number(prompt("Quel est le premier Nombre ?"));
} while (isNaN(premierNombre) || premierNombre === "");
do {
  deuxiemeNombre = Number(prompt("Quel est le deuxieme Nombre ?"));
} while (isNaN(deuxiemeNombre) || deuxiemeNombre === "");

function addition(nombreA, nombreB) {
  return nombreA + nombreB;
}
function multiplication(nombreA, nombreB) {
  return nombreA * nombreB;
}

function Soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}

function division(nombreA, nombreB) {
  if (nombreB == 0) {
    throw new Error("Désolé c'est impossible !");
  }
  return nombreA / nombreB;
}

try {
  switch (choix) {
    case 1:
      resultat = addition(premierNombre, deuxiemeNombre);
      break;
    case 2:
      resultat = multiplication(premierNombre, deuxiemeNombre);
      break;
    case 3:
      resultat = Soustraction(premierNombre, deuxiemeNombre);
      break;
    case 4:
      resultat = division(premierNombre, deuxiemeNombre);
      break;
    default:
      throw new Error("Une erreur quelque part");
  }
  alert("Voici votre résultat" + resultat);
} catch (error) {
  alert(error);
}
