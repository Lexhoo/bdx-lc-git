/*
  Je dois écrire une fonction qui prend en paramètres un tableau de nombres,
  et qui me retourne un tableau contenant uniquement les nombres pairs.

  Comment écrire cette fonction ? 

  Etape 1 : est-ce que ma fonction a besoin d'un nom?
    => Oui, mais elle est déjà donnée ===> Cool
    => Oui, je dois en trouver une ===> trouver un nom parlant, en rapport avec ce qu'elle doit faire
    => Non, je déclare une fonction anonyme
*/

const getEvenNumbers = function() {}

/*
  Etape 2 : Est-ce que ma fonction a besoin de "valeurs externes" pour fonctionner ?
    => Oui, je vais avoir besoin de paramètres
    => Non, je n'ai pas besoin de paramètres
*/

const getEvenNumbers = function(numbers) {}

/*
  Etape 3 : Est-ce que ma fonction a besoin de retourner quelque chose ?
    => Oui, 2 étapes supplémentaires :
        => Retourner une nouvelle variable qui va servir de résultat
        => De quel type est ma variable? ==> initialiser la variable
    => Non, je n'ai pas besoin de variable de resultat
*/

const getEventNumbers = function(numbers) {
  const result = [];

  return result;
}

/*
  Etape 4 : J'écris, sur un bout de papier, ou dans mon IDE, la logique algorithmique
  que devrait avoir ma fonction afin de satisfaire l'énoncé donné. (Ne pas hésiter à 
  indenter, même sur papier !!)

    Step 1 : Déclarer un tableau de "réception"
    Step 2 : Parcourir le tableau passé en paramètre
      Step 3 : Tester si le nombre parcouru est un nombre pair
        Step 4 : Ajouter le nombre au tableau de réception le cas échéant
    Step 5 : Retrourner le nouveau tableau
*/
const getEventNumbers = function(numbers) {
  // step 1
  const result = [];
  // step 2
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i];
    // step 3
    if (num % 2 === 0) {
      // step 4
      result.push(num);
    }
  }
  // step 5
  return result;
}
