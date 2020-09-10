const mongoose = require('mongoose');
const NotaSchema = new mongoose.Schema({
    bim1: Number,
    bim2: Number,
    bim3: Number,
    bim4: Number,
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    materia_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Materia'
    }
});

module.exports = mongoose.model('Nota', NotaSchema);