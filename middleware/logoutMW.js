//Törli a felhasználó session-jét

module.exports = function(objectRep) {
    return function(req, res, next) {
        req.session.destroy(err => {
            res.redirect('/');
        });
    };
};