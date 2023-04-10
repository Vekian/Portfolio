/*Exercice des chiffres romains*/
function solution(number)
{
  var result   = '',
      decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman    = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  decimals.map(function (value, index) {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });
  
  return result;
}

document.getElementById("submit1")
        .addEventListener("click", function() {
          if ((document.getElementById("number").value) < 3999) {
  document.getElementById("result1")
          .innerText = "Votre résultat : " + (solution(document.getElementById("number").value));
        }
          else {
            document.getElementById("result1")
                    .innerText = "Tapez un nombre inférieur à 3999";
          }
});

/*Exercice sur le comptage de voyelles*/
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

document.getElementById("submit2")
        .addEventListener("click", function() {
          document.getElementById("result2")
                  .innerText = "Il y a " + getCount((document.getElementById("string").value)) + " voyelles dans votre phrase.";
        });

/*Exercice sur le comptage de multiples de 3 ou 5*/
function multiple(number){
  let result = 0;
  
  for (let i = 0; i < number; i++) {
    let x = (i % 3);
    let y = (i % 5);
    if (x === 0) {
    result += i; }
    else if (y === 0) {
      result += i;
    }
  }
  return result}

  document.getElementById("submit3")
        .addEventListener("click", function() {
          document.getElementById("result3")
                  .innerText = "Votre résultat est " + multiple((document.getElementById("multiple").value));
        });

/*Exercice sur les nombres entiers */
function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

document.getElementById("submit4")
        .addEventListener("click", function() {
          if ((isPrime((document.getElementById("primeNumber").value))) == false) {
          document.getElementById("result4")
                  .innerText = (document.getElementById("primeNumber").value) + " n'est pas un nombre entier.";
                }
          else if (isPrime((document.getElementById("primeNumber").value))) {
            document.getElementById("result4")
                  .innerText = (document.getElementById("primeNumber").value) + " est un nombre entier.";
          }
        });

/*Exercice qui déforme les phrases*/
function toWeirdCase(string){
  return string.split(' ').map(function(word){
    return word.split('').map(function(letter, index){
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}

document.getElementById("submit5")
        .addEventListener("click", function() {
          document.getElementById("result5")
                  .innerText = toWeirdCase((document.getElementById("weirdString").value));
        });

/*Exercice qui vérifie un triangle*/
function isTriangle(a,b,c) {
   if ((a < 1) || (b < 1) || (c < 1)) {
   return false}
 
 else if (((a+b) > c) & ((a+c) > b) & ((b+c) > a)) {
   return true}
 
 else return false
};


document.getElementById("submit6")
        .addEventListener("click", function() {
          let a = parseInt(document.getElementById("triangleA").value);
          let b = parseInt(document.getElementById("triangleB").value);
          let c = parseInt(document.getElementById("triangleC").value);
          if (isTriangle(a,b,c) == true) {
            document.getElementById("result6")
                    .innerText ="Oui, c'est bien un triangle.";
          }
          else if (isTriangle(a,b,c) == false) {
            document.getElementById("result6")
                    .innerText ="Non, un des côtés est trop petit.";
          };
});