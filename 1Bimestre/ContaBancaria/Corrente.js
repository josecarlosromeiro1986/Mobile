/**
Conta corrente

Criar uma função que verifica se o saque é permitido
 se o saque for maior que o limite mais o saldo em conta
negar o saque 

Criar um funcao de calculo de juros simple onde se o saldo for devedor
por um tempo adicionar uma porcentadem de 2% negativo ao saldo negativo
*/
var Conta = require('./Conta.js');

var Corrente = function(){
    this.jurus = 2;
    this.limite = 1000;
}

Corrente.prototype.verificaSaque = function(valor){
    if(this.limite + this.getSaldo() > valor){
        return true;
    }else{
        return false;
    }
}  

Corrente.prototype.calculaJurus = function(){
    if(this.getSaldo() < 0){
        this.saldo = this.saldo + (getSaldo() * (2/100));
    }else{
        
    }
}

//Define a classe Corrente
function Corrente(){
    Conta.call(this);
}

//Herda a classe Conta
Corrente.prototype = new Conta();

module.exports  = Corrente;