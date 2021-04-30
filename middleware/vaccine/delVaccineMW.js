//Töröl egy vakcinát a db-ből

module.exports = function(objectRep) {
    return function (req, res, next) {
        if (typeof res.locals.vakcina === 'undefined') {
            return next();
        }
        res.locals.vakcina.remove(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(`/vaccine/${res.locals.oltopont._id}`);
        });
    };
};