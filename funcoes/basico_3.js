// arrow function

const felizNatal = () => console.log("Feliz Natal!!!");
felizNatal();

const saudacao = (nome) => "Fala, " + nome + "!!!";
console.log(saudacao("Maria"));

const somar = (arr) => {
  let total = 0;
  for (let n of arr) {
    total += n;
  }

  return total;
};

const media = (arr) => {
  let total = 0;
  for (let n of arr) {
    total += n;
    total;
  }

  return total / arr.length;
};

console.log(media([1, 2, 4, 10]));

///

const potencia = (base) => (exp) => Math.pow(base, exp);
console.log(potencia(2)(10));
