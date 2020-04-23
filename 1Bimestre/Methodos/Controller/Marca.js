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
        const thumb = req.file.filename;

        let marca = await Marca.findOne({ nome });

        if (!marca) {
            let marca = await Marca.create({ nome, thumb });
            return res.json(marca);
        }else{
            return res.status(400).json({error : "Marca já cadastrado!"});
        }
    },

    async update(req, res) {

        let marca = await Marca.findOne({ _id: req.params.id });

        for (let x in req.body) {

            if (marca[x] != undefined) {
                marca[x] = req.body[x];
            } else {
                return res.status(400).json({ error: "A key '" + x + "' não existe! " });
            }
        }

        if (req.file != undefined) {
            marca.thumb = req.file.filename;
        }

        marca = await Marca.updateOne( { _id: req.params.id }, { marca } );

        return res.json(marca);

    },

    async destroy(req, res) {

        let marca = await Marca.deleteOne({ _id: req.params.id });
        return res.json({ marca });

    }
};