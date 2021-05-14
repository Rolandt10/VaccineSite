var expect = require('chai').expect;
var increaseVaccineNumberMW = require('../../../middleware/vaccine/increaseVaccineNumberMW');

describe('increaseVaccineNumberMW', function() {
    it('should save vaccines', function(done) {
    
        const mw = increaseVaccineNumberMW({
            VaccineModel: 'asd'
        });
        mw({
            body: {
                darabszam: 10,
            }
        },{
            locals: {
                oltopont: {
                    _id: 'oltopontid'
                },
                vakcina: {
                    gyarto: 'Pfizer',
                    generacio: 1,
                    darabszam: 10000,
                    save: cb => {
                        cb(null);
                    }
                }
            },
            redirect: where => {
                expect(where).to.be.eql('/vaccine/oltopontid');
                done();
            }
        },
        (err)=>{
            expect(err).to.be.eql(undefined);
            done();
        });
    });
    it('error in db', function(done) {
    
        const mw = increaseVaccineNumberMW({
            VaccineModel: 'asd'
        });
        mw({
            body: {
                darabszam: 10,
            }
        },{
            locals: {
                oltopont: {
                    _id: 'oltopontid'
                },
                vakcina: {
                    gyarto: 'Pfizer',
                    generacio: 1,
                    darabszam: 10000,
                    save: cb => {
                        cb('dbhiba');
                    }
                }
            },
            redirect: where => { }
        },
        (err)=>{
            expect(err).to.be.eql('dbhiba');
            done();
        });
    });
    it('undefined request body', function(done) {
    
        const mw = increaseVaccineNumberMW({
            VaccineModel: 'asd'
        });
        mw({
            body: {
                darabszam: undefined,
            }
        },{
            locals: {
                oltopont: {
                    _id: 'oltopontid'
                },
                vakcina: {
                    gyarto: 'Pfizer',
                    generacio: 1,
                    darabszam: 10000,
                    save: cb => {
                        cb(null);
                    }
                }
            },
            redirect: where => { }
        },
        (err)=>{
            expect(err).to.be.eql(undefined);
            done();
        });
    });
});