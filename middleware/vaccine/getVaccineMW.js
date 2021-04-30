//Betölt egy vakcinát a db-ből

const requireOption = require("../requireOption");

module.exports = function(objectRep) {
    const VakcinaModel = requireOption(objectRep, 'VakcinaModel')
    return function(req, res, next) {
        VakcinaModel.findOne({ _id: req.params.vakcinaid }, (err, vakcina) => {
                if (err || !vakcina) {
                    return next(err);
                }
                res.locals.vakcina = vakcina;
                return next();
            }
        );
    };
};