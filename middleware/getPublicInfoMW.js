
const requireOption = require('./requireOption');

module.exports = function(objectRep) {
    const VakcinaModel = requireOption(objectRep, 'VakcinaModel');
    return function (req, res, next) {
        VakcinaModel.aggregate([
            {
                $lookup: {
                    from: 'oltoponts',
                    localField: '_oltopont',
                    foreignField: '_id',
                    as: 'Oltopont'
                }
            },
            { $unwind: { path: '$Oltopont' } },
            {
                $group: {
                    _id: {
                        cim: "$Oltopont.cim",
                        gyarto: "$gyarto"
                    },
                    vakcinak: {
                        $sum: "$darabszam"
                    }
                }
            },
        ],
        function(err, result) {
            if(err) {
                return next(err);
            }
            res.locals.publikus_informaciok = result.map(e => {
                return { cim: e._id.cim, gyarto: e._id.gyarto, darabszam: e.vakcinak};
            });
            return next();
        });
    };
};