//Elment egy vakcinát a db-be

const requireOption = require('../requireOption');

module.exports = function(objectRep) {
    const VakcinaModel = requireOption(objectRep, 'VakcinaModel');
    return function(req, res, next) {
        if (typeof req.body.gyarto === 'undefined' || typeof req.body.generacio === 'undefined' || typeof req.body.darabszam === 'undefined' || typeof res.locals.oltopont === 'undefined') {
            return next();
        }

        if (typeof res.locals.vakcina === 'undefined') {
            res.locals.vakcina = new VakcinaModel();
        }

        // if (Number.isNaN(parseInt(req.body.ev, 10))) {
        //     return next(new Error('Év számmal kell hogy megadva legyen!'));
        // }

        res.locals.vakcina.gyarto = req.body.gyarto;
        res.locals.vakcina.generacio = req.body.generacio;
        res.locals.vakcina.darabszam = req.body.darabszam;
        res.locals.vakcina._oltopont = res.locals.oltopont._id;

        res.locals.befott.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/befott/${res.locals.nagymama._id}`);
        });
    };
};