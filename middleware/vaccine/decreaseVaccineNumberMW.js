//Elment egy vakcinát a db-be

module.exports = function(objectRep) {
    return function(req, res, next) {
        if (typeof req.body.darabszam === 'undefined') {
            return next();
        }

        if(req.body.darabszam > res.locals.vakcina.darabszam) {
            return next();
        }

        res.locals.vakcina.darabszam -= req.body.darabszam;

        //Ha az összes vakcina elfogyott, automatikusan törlésre kerül
        if(res.locals.vakcina.darabszam == 0) {
            res.locals.vakcina.remove(err => {
                if (err) {
                    return next(err);
                }
                return res.redirect(`/vaccine/${res.locals.oltopont._id}`);
            });
        }

        res.locals.vakcina.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect(`/vaccine/${res.locals.oltopont._id}`);
        });
    };
};