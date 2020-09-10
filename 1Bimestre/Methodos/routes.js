const express = require('express');
const multer = require('multer');

//Solicitação do nossos arquivos do MVC e config
const UploadConfig = require('./config/upload');
const UserController = require('./Controller/User');
const ModeloController = require('./Controller/Modelo');
const EnderecoController = require('./Controller/Endereco');
const MateriaController = require('./Controller/Materia');
const VeiculoController = require('./Controller/Veiculo');
const NotaController = require('./Controller/Nota');

const routes = express.Router();
const upload = multer(UploadConfig);

//Index =Listagem 
//Show = Visualizar os dados gravados
//Store = Gravar
//Destroy = Delete
//este exemplo é o mesmo da segundo exemplo só que simpificado
//app.get('/', (req, res) => res.send('Hello World!'));

//este exemplo completo de uma reuqisição simples
routes.get('/', function (req, res) {
    res.send("Hello word");
});

routes.get('/users', UserController.index);
routes.post('/users/login', UserController.login);
routes.get('/users/:id', UserController.show);
routes.post('/users', upload.single('thumb'), UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.get('/modelo', ModeloController.index);
routes.get('/modelo/:id', ModeloController.show);
routes.post('/modelo', upload.single('thumb'), ModeloController.store);
routes.put('/modelo/:id', upload.single('thumb'), ModeloController.update);
routes.delete('/modelo/:id', ModeloController.destroy);

routes.get('/materia', MateriaController.index);
routes.get('/materia/:id', MateriaController.show);
routes.post('/materia', MateriaController.store);
routes.put('/materia/:id', MateriaController.update);
routes.delete('/materia/:id', MateriaController.destroy);

routes.get('/endereco', EnderecoController.index);
routes.get('/endereco/:id', EnderecoController.show);
routes.post('/endereco', EnderecoController.store);
routes.put('/endereco/:id', EnderecoController.update);
routes.delete('/endereco/:id', EnderecoController.destroy);

routes.get('/veiculo', VeiculoController.index);
routes.get('/veiculo/:id', VeiculoController.show);
routes.post('/veiculo', upload.single('thumb'), VeiculoController.store);
routes.put('/veiculo/:id', upload.single('thumb'), VeiculoController.update);
routes.delete('/veiculo/:id', VeiculoController.destroy);

routes.get('/notas', NotaController.index);
routes.get('/notas/:id', NotaController.show);
routes.post('/notas', NotaController.store);
routes.put('/notas/:id', NotaController.update);
routes.delete('/notas/:id', NotaController.destroy);

module.exports = routes;