const User = require('../Model/User');
module.exports = {

    async index(req, res) {

        let users = await User.find();
        return res.json({ users });
    },

    async show(req, res) {

        let users = await User.findOne({ _id: req.params.id });
        return res.json({ users });

    },

    async store(req, res) {

        const nome = req.body.nome;
        const senha = req.body.senha;
        const sexo = req.body.sexo;
        const email = req.body.email;
        const status = req.body.status;
        const idade = req.body.idade;
        const thumb = req.file.filename;

        let user = await User.findOne({ email });

        if (!user) {
            let user = await User.create({ nome, senha, sexo, email, status, idade, thumb });
            return res.json(user);
        }

        return res.json(user);

    },

    async update(req, res) {

        let user = await User.findOne({ _id: req.params.id });

        user.nome = "Jose Carlos Romeiro";
        user.email = "josecarlos@gmail.com";
        user.senha = "123456";

        user = await User.updateOne(user);

        return res.json(user);

    },

    async destroy(req, res) {

        let users = await User.deleteOne({ _id: req.params.id });
        return res.json({ users });

    }
};