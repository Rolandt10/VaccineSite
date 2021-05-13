//Elment egy vakcinát a db-be

const requireOption = require('../requireOption');

module.exports = function(objectRep) {
    const VakcinaModel = requireOption(objectRep, 'VakcinaModel');
    return function(req, res, next) {
        console.log("---------------");
        console.log(typeof req.body.gyarto);
        if (typeof req.body.gyarto === 'undefined' || typeof req.body.generacio === 'undefined' || typeof req.body.darabszam === 'undefined' || typeof res.locals.oltopont === 'undefined') {
            return next();
        }

        if((req.body.gyarto).length <= 3 || req.body.generacio <= 0 || req.body.darabszam <= 0) {
            return next();
        }

        if (typeof res.locals.vakcina === 'undefined') {
            res.locals.vakcina = new VakcinaModel();
        }

        res.locals.vakcina.gyarto = req.body.gyarto;
        res.locals.vakcina.generacio = req.body.generacio;
        res.locals.vakcina.darabszam = req.body.darabszam;
        res.locals.vakcina._oltopont = res.locals.oltopont._id;

        res.locals.vakcina.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/vaccine/${res.locals.oltopont._id}`);
        });
    };
};