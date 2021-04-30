//Betölti az összes vakcinát a db-ből

const requireOption = require('../requireOption');

module.exports = function(objectRep) {
    const VakcinaModel = requireOption(objectRep, 'VakcinaModel');
    return function(req, res, next) {
        if (typeof res.locals.oltopont === 'undefined') {
            return next();
        }
        VakcinaModel.find({ _oltopont: res.locals.oltopont._id }, (err, vakcinak) => {
            if (err) {
                return next(err);
            }
            res.locals.vakcinak = vakcinak;
            return next();
        });
    };
};