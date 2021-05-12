//Jelszó helyességének ellenőrzése
//Ha helyes, akkor létrehoz egy új session-t

module.exports = function(objectRep) {
    return function(req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }

        if (req.body.password === 'asd') {
            req.session.belepve = true;
            return req.session.save(err => res.redirect('/vaccinationpoint'));
        }

        res.locals.error = 'Hibás jelszó!';
        return next();
    };
};