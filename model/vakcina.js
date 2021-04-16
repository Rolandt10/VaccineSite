const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Vakcina = db.model('Vakcina', {
    cim: String,
    telefonszam: String,
    email: String,
    hutes: Boolean
});

module.exports = Oltopont;