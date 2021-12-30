// Closure é quando um função 'lembra'
// seu escopo léxico, mesmo quando a função
// é executada fora desse escopo léxico

const somarXMaisTres = require("./closure_escopo");

x = 1000;

console.log(somarXMaisTres());
