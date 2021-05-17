//Ellenőrzi, hogy a user be van-e jelentkezve

module.exports = function(objectRep) {
    return function(req, res, next) {
        if (typeof req.session.belepve === 'undefined' || req.session.belepve !== true) {
            return res.redirect('/');
        }
        return next();
    };
};