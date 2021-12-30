const readline = require('readline');

function obterReposta(pergunta) {
  const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
      rl.close();
    });
  });
}

function namorada() {
  setTimeout(() => {
    console.log('N: Apagar as luzes');
  }, 2000);
  setTimeout(() => {
    console.log('N: Pedir silêncio');
  }, 3000);

  setTimeout(() => {
    console.log('T: SURPRESA');
  }, 5000);
}

function sindico() {
  setTimeout(() => {
    console.log('S: Monitorando o barulho');
  }, 1000);
}

async function porteiro(interessados) {
  while (true) {
    const resp = await obterReposta('O namorado chegou? (s/N/q)');
    if (resp.toLowerCase() === 's') {
      (interessados || []).forEach((obs) => obs());
    } else if (resp.toLowerCase() === 'q') {
      break;
    }
  }
}

porteiro([namorada, sindico]);
