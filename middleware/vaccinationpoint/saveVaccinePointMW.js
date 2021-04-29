//Elment egy oltópontot a db-be
const requireOption = require('../requireOption');

module.exports = function(objectRep) {
    const OltopontModel = requireOption(objectRep, 'OltopontModel');
    return function (req, res, next) {
        if (typeof req.body.gyarto === 'undefined' || typeof req.body.generacio === 'undefined' || typeof req.body.darabszam === 'undefined') {
            return next();
        }

        if (typeof res.locals.oltopont === 'undefined') {
            res.locals.oltopont = new OltopontModel();
        }

        res.locals.oltopont.gyarto = req.body.gyarto;
        res.locals.oltopont.generacio = req.body.generacio;
        res.locals.oltopont.darabszam = req.body.darabszam;

        res.locals.oltopont.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/vaccinationpoint');
        });        
    };
};