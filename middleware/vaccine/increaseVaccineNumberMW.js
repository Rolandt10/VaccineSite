module.exports = function(objectRep) {
    return function (req, res, next) {
        next();
    };
};