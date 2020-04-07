//Busca a  bibioteca http
const http = require('http');
//faz a requisição do request
var request = require('request');
//Faz a Requisição do File Server
var fs = require('fs');

//seta o ip ou server que sera execultado
const hostname = '127.0.0.1';

//Seta a porta que sera usada
const port = 8080;

//cria uma constante que gurdara o serverq
const server = http.createServer((req, res) => {
  fs.readFile('./view/hello.html',function(error,data){
     //http://127.0.0.1:8080/
     res.statusCode = 200;

    //seta o Cabeçario //
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    
    res.write(data);
    //informe o seu cep aqui
    var cep = '86183877';

  request('http://viacep.com.br/ws/'+ cep +'/json/', function (error, response, body) {
    console.log('error:', error); // Print o erro que ocorreu
    console.log('statusCode:', response && response.statusCode); // Imprima o código de status da resposta se uma resposta foi recebida
    
    //Json vem como String simples// Json vem como texto puro
    console.log('body:', body); // imprime o Json recebido

    //Transforma o Json de texto puro para um Objeto
    //Assim a gente pode usar data.logradouro
    var data = JSON.parse(body)
    
    //Respoder ao servidor o que sera impresso na pagina 
    res.end('CEP: '+ data.cep+
      '\n Rua: '  +  data.logradouro +
      '\n cidade:'  +  data.localidade +'  '+ data.uf+
      '\n');
   
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
