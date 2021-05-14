var expect = require('chai').expect;
var decreaseVaccineNumberMW = require('../../../middleware/vaccine/decreaseVaccineNumberMW');

describe('decreaseVaccineNumberMW', function() {
    it('should save vaccines', function(done) {
    
        const mw = decreaseVaccineNumberMW({
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
    
        const mw = decreaseVaccineNumberMW({
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
    
        const mw = decreaseVaccineNumberMW({
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
    it('request body darabszam is bigger than stored darabszam', function(done) {
    
        const mw = decreaseVaccineNumberMW({
            VaccineModel: 'asd'
        });
        mw({
            body: {
                darabszam: 10000,
            }
        },{
            locals: {
                oltopont: {
                    _id: 'oltopontid'
                },
                vakcina: {
                    gyarto: 'Pfizer',
                    generacio: 1,
                    darabszam: 1,
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
    it('remove vaccine if darabszam is 0', function(done) {
    
        const mw = decreaseVaccineNumberMW({
            VaccineModel: 'asd'
        });
        mw({
            body: {
                darabszam: 10000,
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
                    remove: cb => {
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
    it('error when removing vaccine', function(done) {
    
        const mw = decreaseVaccineNumberMW({
            VaccineModel: 'asd'
        });
        mw({
            body: {
                darabszam: 10000,
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
                    remove: cb => {
                        cb('removeerror');
                    }
                }
            },
            redirect: where => { }
        },
        (err)=>{
            expect(err).to.be.eql('removeerror');
            done();
        });
    });
});