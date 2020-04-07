/**Pra fazer as requests com o Node, vamos utilizar uma biblioteca chamada Request. 
 * Para utilizá-la, temos que fazer a instalação. No seu terminal, digite: 
 * npm install request*/

var request = require('request');
/**
 *  Para acessar o webservice, um CEP no formato de {8} dígitos deve ser fornecido, por exemplo: "01001000".
Após o CEP, deve ser fornecido o tipo de retorno desejado, que deve ser "json", "xml", "piped" ou "querty".
Exemplo de pesquisa por CEP:
viacep.com.br/ws/01001000/json/ 
*/
//informe o seu cep aqui
var cep = '86183877';

request('http://viacep.com.br/ws/'+ cep +'/json/', function (error, response, body) {
  console.log('error:', error); // Print o erro que ocorreu
  console.log('statusCode:', response && response.statusCode); // Imprima o código de status da resposta se uma resposta foi recebida
  console.log('body:', JSON.parse(body)); // imprime o Json recebido
  /*Lembra que eu disse que o JSON é uma string? Precisamos transformá-lo em um objeto.
  Para isso, temos que fazer o parse dessa string.
  O javascript já tem uma função que faz isso para nós: JSON.parse.
  Vamos fazer a chamada e atribuir esse objeto a uma variável. Agora,
  poderemos acessar os atributos do objeto normalmente. */
  var json = JSON.parse(body)
    cidade = json.localidade;
    
    request('http://api.openweathermap.org/data/2.5/weather?q='+cidade+'&APPID=604b9d1c6b9e0b3e94b0b3ffd01fe6ba', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    var parsedWeather = JSON.parse(body);
    //console.log(body);
    console.log('A temperatura atual em '+ cidade +' é ' + parsedWeather['main']['temp']/10); // Print the Temperature in the city of Londrina
  });

});


