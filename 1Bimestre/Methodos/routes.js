const express = require('express');
const routes = express.Router();
const UserController = require('./Controller/User');
const VeiculoController = require('./Controller/Veiculo');
const ModeloController = require('./Controller/Modelo');
const MarcaController = require('./Controller/Marca');

routes.get('/users/:id', UserController.show);

routes.get('/users', UserController.index);

routes.post('/users', UserController.store);

routes.put('/users/:id', UserController.update);

routes.delete('/users/:id', UserController.destroy);

routes.get('/veiculo/:id', VeiculoController.show);

routes.get('/veiculo', VeiculoController.index);

routes.post('/veiculo', VeiculoController.store);

routes.put('/veiculo/:id', VeiculoController.update);

routes.delete('/veiculo/:id', VeiculoController.destroy);

routes.get('/modelo/:id', ModeloController.show);

routes.get('/modelo', ModeloController.index);

routes.post('/modelo', ModeloController.store);

routes.put('/modelo/:id', ModeloController.update);

routes.delete('/modelo/:id', ModeloController.destroy);

routes.get('/marca/:id', MarcaController.show);

routes.get('/marca', MarcaController.index);

routes.post('/marca', MarcaController.store);

routes.put('/marca/:id', MarcaController.update);

routes.delete('/marca/:id', MarcaController.destroy);

module.exports = routes;