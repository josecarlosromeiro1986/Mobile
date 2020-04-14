const Endereco = require('../Model/Endereco');
var request = require('request');

module.exports = {

    async index(req, res) {

        let endereco = await Endereco.find();
        return res.json({ endereco });
    },

    async show(req, res) {

        let endereco = await Endereco.findOne({ _id: req.params.id });
        return res.json({ endereco });

    },    

    async store(req, res) {
        
        request('http://viacep.com.br/ws/'+ req.body.cep +'/json/', async function(error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);

            var data = JSON.parse(body);
            
            const cep = data.cep;
            const logradouro = data.logradouro;
            const complemento = data.complemento;
            const bairro = data.bairro;
            const localidade = data.localidade;
            const uf = data.uf;
            const ibge = data.ibge;
            let {user_id} = req.headers;

            let endereco = await Endereco.create({ cep, logradouro, complemento, bairro, localidade, uf, ibge, user_id });

            return res.json(endereco);
        });
    },

    async update(req, res) {

        let endereco = await Endereco.findOne({ _id: req.params.id });

        endereco.logradouro = req.body.logradouro;
        endereco.complemento = req.body.complemento;
        endereco.bairro = req.body.bairro;
        endereco.localidade = req.body.localidade;

        let teste = await Endereco.updateOne(endereco);

        return res.json(teste);

    },

    async destroy(req, res) {

        let endereco = await Endereco.deleteOne({ _id: req.params.id });
        return res.json({ endereco });

    }
};