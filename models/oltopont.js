const db = require('../config/db');

const Oltopont = db.model('Oltopont', {
    cim: String,
    telefonszam: String,
    email: String,
    hutes: Boolean
});

module.exports = Oltopont;