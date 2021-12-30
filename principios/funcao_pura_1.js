// Uma função pura é uma função que o valor
// de entrada é determinado APENAS por seus valores
// de entrada; sem efeitos colaterais observáveis

const PI = 3.14;

// função impura - PI é um valor externo

function areaCirc(raio) {
  return raio * raio * PI;
}

console.log(areaCirc(10));

// função pura

function areaCircPura(raio, pi) {
  return raio * raio * pi;
}

console.log(areaCircPura(10, PI));
console.log(areaCircPura(10, 3.141592));
