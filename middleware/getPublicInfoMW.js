
const requireOption = require('./requireOption');

module.exports = function(objectRep) {
    const VakcinaModel = requireOption(objectRep, 'VakcinaModel');
    return function (req, res, next) {
        VakcinaModel.aggregate(
            [
                {
                    $lookup: {
                        from: 'oltoponts',
                        localField: '_id',
                        foreignField: '_id',
                        as: 'Oltopont'
                    }
                },
                {
                    $limit: 10
                },
                { $unwind: { path: '$Oltopont' } }
            ],
            function(err, result) {
                if (err) {
                    return next(err);
                }
                res.locals.publikus_informaciok = result.map(e => {
                    return { cim: e.Oltopont.cim, gyarto: e.gyarto, darabszam: e.darabszam };
                });
                return next();
            }
        );
        // VakcinaModel.aggregate([
        //     {
        //         $lookup:
        //         {
        //             from: 'oltoponts',
        //             localField: '_id',
        //             foreignField: '_id',
        //             as: 'Oltopont'
        //         },
        //     },
        // ],
        // function(err, result) {
        //     console.log(result);
        //     if(err) {
        //         return next(err);
        //     }
        //     res.locals.publikus_informaciok = result.map(e => {
        //         return { gyarto: e.gyarto, darabszam: e.darabszam};
        //     });
        //     return next();
        // });
    };
};