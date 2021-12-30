const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "Impressora", qtde: 1, preco: 649.5, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: true },
];

// filter

/* const filtrarFragil = (item) => item.fragil === true;
const getTotal = (item) => item.qtde * item.preco;
const getMedia = (acc, el) => {
  let soma = acc + el;
  return soma / el.lenght;
};
const itensFiltrados = carrinho.filter(filtrarFragil);
const totaisFiltrados = itensFiltrados.map(getTotal);
const media = totaisFiltrados.reduce(getMedia, 0);

console.log(itensFiltrados);
console.log(totaisFiltrados);
console.log(media); */

/* const media = carrinho
  .filter((item) => item.fragil)
  .map((item) => item.qtde * item.preco)
  .reduce(
    (acc, el) => {
      const novaQtde = acc.qtde + 1;
      const novoTotal = acc.total + el;
      return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde,
      };
    },
    { qtde: 0, total: 0, media: 0 }
  ).media;

console.log(media); */

const fragil = (item) => item.fragil;
const getTotal = (item) => item.qtde * item.preco;
const getMedia = (acc, el) => {
  const novaQtde = acc.qtde + 1;
  const novoTotal = acc.total + el;
  return {
    qtde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde,
  };
};

const mediaInicial = { qtde: 0, total: 0, media: 0 };

const media = carrinho
  .filter(fragil)
  .map(getTotal)
  .reduce(getMedia, mediaInicial).media;

console.log(media);

// myReduce

Array.prototype.myReduce = function (fn, inicial) {
  let acc = inicial;
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
    } else {
      acc = fn(acc, this[i], i, this);
    }
  }
  return acc;
};
