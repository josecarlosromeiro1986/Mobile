//npm install express
//npm install nodemon
//npm install request
//npm install sucrase
//atualizar o packge.json 
//abaixo da linha test, dentro do methodo Script acresentar o comando abaixo
//"Methodos" : "nodemon Methodos/app.js"
const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;
const hostname = "192.168.0.100";

mongoose.connect('mongodb+srv://jose:290105@cluster0-auahr.mongodb.net/Biqueira?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, hostname, () => {
    console.log(`Servidor rodando na porta ${port} em ${hostname}`);
})