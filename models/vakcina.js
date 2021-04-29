const db = require('../config/db');
const Schema = require('mongoose').Schema;

const Vakcina = db.model('Vakcina', {
    gyarto: String,
    generacio: Number,
    darabszam: Number,
    _oltopont: {
        type: Schema.Types.ObjectId,
        ref: 'Oltopont'
    }
});

module.exports = Vakcina;