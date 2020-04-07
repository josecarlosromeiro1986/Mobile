const mongoose = require('mongoose');

const VeiculoSchema = new mongoose.Schema({
    nome : String,
    motor : String,
    portas : Number,
    cor : String,
    combustivel : String,
    ano_fab : Number,
    ano_mod : Number,
    placa :String,
});

module.exports = mongoose.model('Veiculo', VeiculoSchema);