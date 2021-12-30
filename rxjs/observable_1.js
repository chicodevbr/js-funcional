const { Observable } = require('rxjs');

const promise = new Promise((resolve) => {
  resolve('Promise is nice!');
});

promise.then(console.log);

const obs = new Observable((subscriber) => {
  subscriber.next('Observer ');
  subscriber.next('is ');
  subscriber.next('nice');
  subscriber.next('.');
});

obs.subscribe(console.log);
