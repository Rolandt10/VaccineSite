//Betölti az összes oltópontot a db-ből

const requireOption = require('../requireOption');

module.exports = function(objectRep) {
    const OltopontModel = requireOption(objectRep, 'OltopontModel');
    return function (req, res, next) {
        OltopontModel.find({}, (err, oltopontok) => {
            if(err)
                return next(err);
        })
        res.locals.oltopontok = oltopontok;
        return next();
    };
};