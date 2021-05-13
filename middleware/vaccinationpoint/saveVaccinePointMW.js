//Elment egy oltópontot a db-be
const requireOption = require('../requireOption');

module.exports = function(objectRep) {
    const OltopontModel = requireOption(objectRep, 'OltopontModel');
    return function (req, res, next) {
        if (typeof req.body.cim === 'undefined' || typeof req.body.telefonszam === 'undefined' || typeof req.body.email === 'undefined') {
            return next();
        }

        if((req.body.cim).length <= 3 || (req.body.telefonszam).length < 6 || (req.body.email).length <= 0) {
            return next();
        }

        if (typeof res.locals.oltopont === 'undefined') {
            res.locals.oltopont = new OltopontModel();
        }

        res.locals.oltopont.cim = req.body.cim;
        res.locals.oltopont.telefonszam = req.body.telefonszam;
        res.locals.oltopont.email = req.body.email;
        res.locals.oltopont.hutes = req.body.hutes;

        res.locals.oltopont.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/vaccinationpoint');
        });        
    };
};