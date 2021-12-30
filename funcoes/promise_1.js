let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa(3);
});

p.then((valor) => console.log(valor));
