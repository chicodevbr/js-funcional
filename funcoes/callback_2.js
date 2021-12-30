const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

function exibir(err, conteudo) {
  console.log(conteudo.toString());
}

fs.readFile(caminho, {}, exibir);

console.log("Início Sync...");
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("Fim Sync...");
