//Elment egy vakcinát a db-be

module.exports = function(objectRep) {
    return function(req, res, next) {
        if (typeof req.body.darabszam === 'undefined') {
            return next();
        }

        res.locals.vakcina.darabszam -= req.body.darabszam;

        res.locals.vakcina.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/vaccine/${res.locals.oltopont._id}`);
        });
    };
};