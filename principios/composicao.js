function composicao(...fns) {
  return function (valor) {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, valor);
  };
}

function gritar(text) {
  return text.toUpperCase();
}

function enfatizar(text) {
  return `${text}!!!!`;
}

function tornarLento(text) {
  return text.split('').join(' ');
}

const exagerado = composicao(gritar, enfatizar, tornarLento);
// const resultado = composicao(gritar, enfatizar, tornarLento)('para');

const resultado1 = exagerado('para');
const resultado2 = exagerado('Cuidado com o Buraco');
console.log(resultado1);
console.log(resultado2);
