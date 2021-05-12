//Elment egy vakcinát a db-be

module.exports = function(objectRep) {
    return function(req, res, next) {
        res.locals.vakcina.darabszam = res.locals.vakcina.darabszam - req.body.darabszam;
        res.locals.vakcina.gyarto = req.body.gyarto;
        res.locals.vakcina.generacio = req.body.generacio;
        res.locals.vakcina._oltopont = res.locals.oltopont._id;

        return next();
    };
};