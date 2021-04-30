//Töröl egy oltópontot a db-ből

module.exports = function(objectRep) {
    return function (req, res, next) {
        if(typeof res.locals.oltopont === 'undefined') {
            return next();
        }
        res.locals.oltopont.remove(err => {
            if(err)
                return next(err);
            
            return res.redirect('/vaccinationpoint');
        });
    };
};