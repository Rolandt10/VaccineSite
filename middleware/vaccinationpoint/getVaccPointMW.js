//Betölt egy oltópontot a db-ből

const requireOption = require("../requireOption");

module.exports = function(objectRep) {
    const OltopontModel = requireOption(objectRep, 'OltopontModel');
    return function (req, res, next) {
        OltopontModel.findOne({_id: req.params.oltopontid}, (err, oltopont) => {
            if(err || !oltopont)
                return next(err);
    
            res.locals.oltopont = oltopont;
            return next();
        });
    };
};