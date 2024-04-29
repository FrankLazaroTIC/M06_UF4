//1
async function esDivisible(num) {
    return new Promise((resolve, reject) => {
      if (num % 2 === 0) {
        resolve(`El número ${num} es divisible entre dos`);
      } else {
        reject(`El número ${num} no es divisible entre dos`);
      }
    });
  }
  
  esDivisible(4)
    .then(console.log)
    .catch(console.log);
  
   esDivisible(5)
    .then(console.log)
    .catch(console.log);

//2
let promesa = new Promise((resultat, error) => {
  let valor = 11; // Canvia aquest valor per provar
  if (valor >= 0 && valor <= 10) {
    resultat("El valor està dins del rang");
  } else {
    error("El valor està fora del rang");
  }
});

promesa
    .then(console.log)
    .catch(console.log);

//3

async function esVocal(lletra) {
    let arr = ["a", "e", "i", "o", "u"];
    return new Promise((resolve, reject) => {
      if (arr.includes(lletra)) {
        resolve(`La lletra ${lletra} és una vocal`);
      } else {
        reject(`La lletra ${lletra} no és una vocal`);
      }
    });
  }
  
  esVocal("a")
    .then(console.log)
    .catch(console.log);

    esVocal("b")
    .then(console.log)
    .catch(console.log);

//4
async function divisio(a, b) {
    return new Promise((resolve, reject) => {
      if (b === 0) {
        reject("Error: Divisió per zero");
      } else {
        resolve(a / b);
      }
    });
  }
  
  divisio(10, 4)
    .then(console.log)
    .catch(console.log);
