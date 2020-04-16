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
        
        let modelo = await Modelo.findOne({ nome });

        if (!modelo) {
            let modelo = await Modelo.create({ nome });
            return res.json(modelo);
        }else{
            return res.status(400).json({error : "Modelo já cadastrado!"});
        }
    },

    async update(req, res) {

        let modelo = await Modelo.findOne({ _id: req.params.id });

        for (let x in req.body) {

            if (modelo[x] != undefined) {
                modelo[x] = req.body[x];
            } else {
                return res.status(400).json({ error: "A key '" + x + "' não existe! " });
            }
        }

        modelo = await Modelo.updateOne(modelo);

        return res.json(modelo);

    },

    async destroy(req, res) {

        let modelo = await Modelo.deleteOne({ _id: req.params.id });
        return res.json({ modelo });

    }
};