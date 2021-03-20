//Ellenőrzi, hogy a user be van-e jelentkezve

module.exports = function(objectRep) {
    return function (req, res, next) {
        next();
    };
};