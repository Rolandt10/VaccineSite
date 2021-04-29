const db = require('../config/db');

const Vakcina = db.model('Vakcina', {
    gyarto: String,
    generacio: Number,
    darabszam: Number,
    _oltopont: {
        type: Schema.Types.ObjectId,
        ref: 'Vakcina'
    }
});

module.exports = Vakcina;