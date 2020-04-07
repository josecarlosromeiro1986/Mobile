const Veiculo = require('../Model/Veiculo');
module.exports = {

    async index(req, res) {

        let veiculos = await Veiculo.find();
        return res.json({ veiculos });
    },

    async show(req, res) {

        let veiculo = await Veiculo.findOne({ _id: req.params.id });
        return res.json({ veiculo });

    },

    async store(req, res) {

        const nome = req.body.nome;
        const motor = req.body.motor;
        const portas = req.body.portas;
        const cor = req.body.cor;
        const combustivel = req.body.combustivel;
        const ano_fab = req.body.ano_fab;
        const ano_mod = req.body.ano_mod;
        const placa = req.body.placa;

        let existe = await Veiculo.findOne({ placa });

        if (!existe) {
            let veiculo = await Veiculo.create({ nome, motor, portas, cor, combustivel, ano_fab, ano_mod, placa });
            return res.json(veiculo);
        } else {
            return res.json(existe);            
        }
    },

    async update(req, res) {

        let veiculo = await Veiculo.findOne({ _id: req.params.id });

        veiculo.cor = "Chumbo";
        veiculo = await Veiculo.updateOne(veiculo);

        return res.json(veiculo);

    },

    async destroy(req, res) {

        let veiculo = await Modelo.deleteOne({ _id: req.params.id });
        return res.json({ veiculo });

    }
};