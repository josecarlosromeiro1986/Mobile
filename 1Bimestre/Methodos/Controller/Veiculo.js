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
        const thumb = req.file.filename;

        let veiculo = await Veiculo.findOne({ placa });

        if (!veiculo) {
            let veiculo = await Veiculo.create({ nome, motor, portas, cor, combustivel, ano_fab, ano_mod, placa, thumb });
            return res.json(veiculo);
        }else{
            return res.status(400).json({error : "Veículo já cadastrado!"});
        }
    },

    async update(req, res) {

        let veiculo = await Veiculo.findOne({ _id: req.params.id });

        for (let x in req.body) {

            if (veiculo[x] != undefined) {
                veiculo[x] = req.body[x];
            } else {
                return res.status(400).json({ error: "A key '" + x + "' não existe! " });
            }
        }
        
        if (req.file != undefined) {
            veiculo.thumb = req.file.filename;
        }

        veiculo = await Veiculo.updateOne(veiculo);

        return res.json(veiculo);

    },

    async destroy(req, res) {

        let veiculo = await Modelo.deleteOne({ _id: req.params.id });
        return res.json({ veiculo });

    }
};