const fs = require("fs");
const path = require("path");

function readMyFile(caminho) {
  return new Promise((resolve) => {
    fs.readFile(caminho, function (_, conteudo) {
      resolve(conteudo.toString());
    });
  });
}

const caminho = path.join(__dirname, "dados.txt");

readMyFile(caminho)
  .then((conteudo) => conteudo.split("\n"))
  .then((linhas) => linhas.join(","))
  .then(console.log);
