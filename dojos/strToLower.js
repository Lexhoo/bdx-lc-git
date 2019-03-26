/*
  Créer une fonction qui prend en paramètre une chaîne de caractère,
  comprenant des majuscules et des minuscules, et qui doit retourner cette
  même chaîne de caractère sans majuscule.

  Exemple : 
  const str = "CoucoU Je sUiS unE cHaIne dE cArActere."
  => "coucou je suis une chaine de caractère"

  INTERDIT : str.toLowerCase();
*/


const strToLower = function(str){
  let result = '';
  for (let i = 0; i< str.length; i +=1 ){
    result += str[i].toLowerCase();
  }
  return result;
}

console.log(strToLower("CoucoU Je sUiS unE cHaIne dE cArActere."));