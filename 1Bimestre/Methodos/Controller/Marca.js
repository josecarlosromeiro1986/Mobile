const Marca = require('../Model/Marca');
module.exports = {

    async index(req, res) {

        let marca = await Marca.find();
        return res.json({ marca });
    },

    async show(req, res) {

        let marca = await Marca.findOne({ _id: req.params.id });
        return res.json({ marca });

    },

    async store(req, res) {        

        const nome = req.body.nome;  

        let marca = await Marca.create({ nome });

        return res.json(marca);

    },

    async update(req, res) {

        let marca = await Marca.findOne({ _id: req.params.id });

        marca.nome = "Chevrolet";
        marca = await Marca.updateOne(marca);

        return res.json(marca);

    },

    async destroy(req, res) {

        let marca = await Marca.deleteOne({ _id: req.params.id });
        return res.json({ marca });

    }
};