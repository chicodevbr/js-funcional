// Function Declaration

function bomDia() {
  console.log("Bom Dia");
}

bomDia();

// Function Expression

const boaTarde = function () {
  console.log("Boa Tarde");
};

boaTarde();

function somar(a, b) {
  return a + b;
}

const resultado = somar(3, 4);
console.log(resultado);

/// media

function media(a, b, c) {
  return a + b + c / 3;
}

const notas = media(10, 5, 8);
console.log(notas);
