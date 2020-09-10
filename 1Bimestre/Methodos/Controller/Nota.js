const Nota = require('../Model/Nota');

module.exports = {

    async index(req, res) {
        let nota = await Nota.find();
        return res.json(nota);
    },

    async show(req, res) {
        let nota = await Nota.findOne({ _id: req.params.id });
        return res.json(nota);
    },

    async store(req, res) {
        await Nota.create({
            user_id: req.body.user_id,
            materia_id: req.body.materia_id,
            bim1: req.body.bim1,
            bim2: req.body.bim2,
            bim3: req.body.bim3,
            bim4: req.body.bim4
        });

        return res.status(200).json({ success: "Notas cadastradas com sucesso." })
    },

    async update(req, res) {
        //recuperando o registro
        let nota = await Nota.findOne({ _id: req.params.id });
        nota.bim1 = req.body.bim1;
        nota.bim2 = req.body.bim2;
        nota.bim3 = req.body.bim3;
        nota.bim4 = req.body.bim4;

        await Nota.updateOne(nota);
        return res.status(202).json({success : "Notas atualizadas com sucesso."})
    },

    /* async update(req, res) {
        //recuperando o registro
        let notas = await Nota.findOne({ _id: req.params.id });
        notas.bim1 = req.body.bim1;
        notas.bim2 = req.body.bim2;
        notas.bim3 = req.body.bim3;
        notas.bim4 = req.body.bim4;
        // //edito os registro 
        await Nota.updateOne(notas).then(result => {
            res.status(200).json({ message: "Notas atualizadas com sucesso." });
        })
    }, */

    async destroy(req, res) {
        await Nota.deleteOne({ _id: req.params.id });
        return res.status(200).json({ success: "Notas apagadas com sucesso." })
    },
}