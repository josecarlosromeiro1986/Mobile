const Modelo = require('../Model/Modelo');
module.exports = {

    async index(req, res) {

        let modelo = await Modelo.find();
        return res.json({ modelo });
    },

    async show(req, res) {

        let modelo = await Modelo.findOne({ _id: req.params.id });
        return res.json({ modelo });

    },

    async store(req, res) {        

        const nome = req.body.nome;  

        let modelo = await Modelo.create({ nome });

        return res.json(modelo);

    },

    async update(req, res) {

        let modelo = await Modelo.findOne({ _id: req.params.id });

        modelo.nome = "Chevrolet";
        modelo = await Modelo.updateOne(modelo);

        return res.json(modelo);

    },

    async destroy(req, res) {

        let modelo = await Modelo.deleteOne({ _id: req.params.id });
        return res.json({ modelo });

    }
};