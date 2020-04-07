var Conta = require('./Conta.js');
var Poupanca = require('./Poupanca.js');
var Corrente = require('./Corrente.js');

/* var conta1 = new Conta();
conta1.deposito(105);
conta1.saque(1000);
 */
/* var p = new Poupanca();
//correige o ponteiro construto, para aponbtar para a poupanca
Poupanca.prototype.constructor = Poupanca;

p.deposito(10);
p.getSaldo();
p.rende();
p.getSaldo(); */

var c = new Corrente();
//correige o ponteiro construto, para aponbtar para a poupanca
Corrente.prototype.constructor = Corrente;

c.deposito(100);
c.getSaldo(150);

c.getSaldo();
