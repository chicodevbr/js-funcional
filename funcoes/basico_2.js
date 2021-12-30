function bomDia() {
  console.log("Bom dia");
}

function boaTarde() {
  console.log("Boa tarde");
}

//Passar uma funação como param p/ outra função
function executarQualquerCoisa(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// Retornar uma função a partir de uma outra função

// function potencia(base, exp) {
//   return Math.pow(base, exp);
// }

// const bits8 = potencia(2, 8);
// console.log(bits8);

function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));
console.log(potencia(3)(4));

/// somar(3)(4)(5)

function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const fnSoma = somar(3)(4)(5);
console.log(fnSoma);

/// calcular(3)(7)(fn)

function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

const menos = calcular(10)(5)(subtrair);
const mais = calcular(2)(1557)(multiplicar);

console.log(menos);
