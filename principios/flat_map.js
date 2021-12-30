const letrasAninhadas = [
  ['o', ['l'], 'á'],
  [' '],
  ['m', ['u', ['n']], 'd', 'o'],
  ['!', '!', '!'],
];

// const resultado = letras.map((l) => l.toUpperCase()).reduce((a, b) => a + b);

//console.log(resultado);

//console.log(letrasAninhadas.flat().flat());

const letras = letrasAninhadas.flat(Infinity);
