//Csökkenti a vakcina számát, illetve elmenti azt a db-be

module.exports = function(objectRep) {
    return function(req, res, next) {
        console.log(res.locals.vakcina);
        if (typeof req.body.darabszam === 'undefined') {
            return next();
        }

        let darabszam = parseInt(req.body.darabszam);
        res.locals.vakcina.darabszam += darabszam;

        res.locals.vakcina.save(err => {
            if (err) {
                return next(err);
            }
    
            return res.redirect(`/vaccine/${res.locals.oltopont._id}`);
        });
    };
};