/* setTimeout(function () {
  console.log("Executando callback...");

  setTimeout(function () {
    console.log("Executando callback...2");

    setTimeout(function () {
      console.log("Executando callback...3");
    }, 1000);
  }, 2000);
}, 2000); */

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("Executando a promise...");
      resolve();
    }, tempo);
  });
}

let p = esperarPor()
  .then(() => esperarPor())
  .then(esperarPor);
