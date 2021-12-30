const notas = [10, 8, 3, 10, 9];
const notasOrdenadas = notas.sort();

notasOrdenadas.pop();
notasOrdenadas.shift();

const soma = notasOrdenadas.reduce((soma, i) => {
  return soma + i;
});

const media = soma / 3;

console.log(notasOrdenadas);
console.log(media);
console.log(
  `A média das notas da ginasta foi ${media}. As notas foram ${notas[0]}, ${notas[1]}, ${notas[2]}`
);
