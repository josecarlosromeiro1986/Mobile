var Conta = function(){
    this.agencia;
    this.conta;
    this.senha;
    this.saldo = 0;
}

Conta.prototype.comparaSenha = function(senha){
    if(this.senha == senha){
        return true;
    } else {
        return false;
    }
}   

Conta.prototype.getSaldo = function(){
    console.log('Seu saldo é de ' + this.saldo);
    return this.saldo;
}

Conta.prototype.deposito = function(valor){
    this.saldo = this.saldo + valor;
    console.log('Você depositou '+valor);
}

Conta.prototype.saque = function(valor){
    if(valor <= this.saldo){
        this.saldo = this.saldo + valor;
    }else{
        console.log('saldo insuficiente')
    }
}
module.exports  = Conta;