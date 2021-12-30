const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;
const marioQueZero = (item) => item.qtde > 0;

const itensValidos = carrinho.filter(marioQueZero).map(getNome);

console.log(itensValidos);

/// myFilter

Array.prototype.myFilter = function (fn) {
  const filtered = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      filtered.push(this[i]);
    }
  }

  return filtered;
};

const itensValidos2 = carrinho.myFilter(marioQueZero).map(getNome);
console.log(itensValidos2);
