const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Vakcina = db.model('Vakcina', {
    cim: String,
    telefonszam: String,
    email: String,
    hutes: Boolean,
    _oltopont: {
        type: Schema.Types.ObjectId,
        ref: 'Oltopont'
    }
});

module.exports = Oltopont;