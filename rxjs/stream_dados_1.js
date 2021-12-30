function gerarNumeros(fn) {
  let num = 0;
  setInterval(() => {
    fn(num++);
  }, 1000);
}

gerarNumeros((numero) => {
  console.log(numero * 2);
});
