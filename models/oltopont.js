const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Oltopont = db.model('Oltopont', {
    gyarto: String,
    generacio: Number,
    darabszam: Number
});

module.exports = Oltopont;