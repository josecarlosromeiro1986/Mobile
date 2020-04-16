const express = require('express');
const multer = require('multer');

const UploadConfig = require('./config/upload');
const UserController = require('./Controller/User');
const VeiculoController = require('./Controller/Veiculo');
const ModeloController = require('./Controller/Modelo');
const MarcaController = require('./Controller/Marca');
const EnderecoController = require('./Controller/Endereco');

const routes = express.Router();
const upload = multer(UploadConfig);

routes.get('/users/:id', UserController.show);
routes.get('/users', UserController.index);
routes.post('/users', upload.single('thumb'), UserController.store);
routes.put('/users/:id', upload.single('thumb'), UserController.update);
routes.delete('/users/:id', UserController.destroy);
//foto
routes.get('/veiculo/:id', VeiculoController.show);
routes.get('/veiculo', VeiculoController.index);
routes.post('/veiculo', upload.single('thumb'), VeiculoController.store);
routes.put('/veiculo/:id', upload.single('thumb'), VeiculoController.update);
routes.delete('/veiculo/:id', VeiculoController.destroy);

routes.get('/modelo/:id', ModeloController.show);
routes.get('/modelo', ModeloController.index);
routes.post('/modelo', ModeloController.store);
routes.put('/modelo/:id', ModeloController.update);
routes.delete('/modelo/:id', ModeloController.destroy);
//logo
routes.get('/marca/:id', MarcaController.show);
routes.get('/marca', MarcaController.index);
routes.post('/marca', upload.single('thumb'), MarcaController.store);
routes.put('/marca/:id', upload.single('thumb'), MarcaController.update);
routes.delete('/marca/:id', MarcaController.destroy);

routes.get('/endereco/:id', EnderecoController.show);
routes.get('/endereco', EnderecoController.index);
routes.post('/endereco', EnderecoController.store);
routes.put('/endereco/:id', EnderecoController.update);
routes.delete('/endereco/:id', EnderecoController.destroy);

module.exports = routes;