//Jelszó helyességének ellenőrzése
//Ha helyes, akkor létrehoz egy új session-t

module.exports = function(objectRep) {
    return function (req, res, next) {
        next();
    };
};