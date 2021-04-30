//Ellenőrzi, hogy a user be van-e jelentkezve
const authenticationMW = require('../middleware/authenticationMW');
//Jelszó helyességének ellenőrzése
//Ha helyes, akkor létrehoz egy új session-t
const checkpassMW = require('../middleware/checkPassMW');
//Törli a felhasználó session-jét
const logoutMW = require('../middleware/logoutMW');
//Template engine használatakor, az értékek kiírására
const renderMW = require('../middleware/renderMW');
//Töröl egy vakcinát a db-ből
const delVaccineMW = require('../middleware/vaccine/delVaccineMW');
//Betölt egy vakcinát a db-ből
const getVaccineMW = require('../middleware/vaccine/getVaccineMW');
//Betölti az összes vakcinát a db-ből
const getVaccinesMW = require('../middleware/vaccine/getVaccinesMW');
//Elment egy vakcinát a db-be
const saveVaccineMW = require('../middleware/vaccine/saveVaccineMW');
//Töröl egy oltópontot a db-ből
const delVaccinePointMW = require('../middleware/vaccinationpoint/delVaccPointMW');
//Betölt egy oltópontot a db-ből
const getVaccinePointMW = require('../middleware/vaccinationpoint/getVaccPointMW');
//Betölti az összes oltópontot a db-ből
const getVaccinePointsMW = require('../middleware/vaccinationpoint/getVaccPointsMW');
//Elment egy oltópontot a db-be
const saveVaccinePointMW = require('../middleware/vaccinationpoint/saveVaccinePointMW');
//Csökkenti a vakcina számát, illetve elmenti azt a db-be
const decreaseVaccineNumberMW = require('../middleware/vaccine/decreaseVaccineNumberMW');
//Növeli a vakcina szémét, illetve elmenti azt a db-be
const increaseVaccineNumberMW = require('../middleware/vaccine/increaseVaccineNumberMW');

const OltopontModel = require('../models/oltopont');
const VakcinaModel = require('../models/vakcina');

module.exports = function(app) {

    let objectRep = {
        OltopontModel: OltopontModel,
        VakcinaModel: VakcinaModel
    };

    app.use('/vaccine/:oltopontid/edit/:vakcinaid',
        //authenticationMW(objectRep),
        getVaccinePointMW(objectRep),
        getVaccineMW(objectRep),
        saveVaccineMW(objectRep),
        renderMW(objectRep, 'editvakcina')
    );

    app.use('/vaccine/:oltopontid/decrease/:vakcinaid',
        //authenticationMW(objectRep),
        getVaccinePointMW(objectRep),
        getVaccineMW(objectRep),
        decreaseVaccineNumberMW(objectRep),
        renderMW(objectRep, 'vakcina_csokkentes')
    );

    app.use('/vaccine/:oltopontid/increase/:vakcinaid',
        //authenticationMW(objectRep),
        getVaccinePointMW(objectRep),
        getVaccineMW(objectRep),
        increaseVaccineNumberMW(objectRep),
        renderMW(objectRep, 'vakcina_noveles')
    );

    app.get('/vaccine/:oltopontid/delete/:vakcinaid',
        //authenticationMW(objectRep),
        getVaccinePointMW(objectRep),
        getVaccineMW(objectRep),
        delVaccineMW(objectRep)
    );

    app.use('/vaccinationpoint/edit/:oltopontid',
        //authenticationMW(objectRep),
        getVaccinePointMW(objectRep),
        saveVaccinePointMW(objectRep),
        renderMW(objectRep, 'editoltopont')
    );

    app.get('/vaccinationpoint/delete/:oltopontid',
        //authenticationMW(objectRep),
        getVaccinePointMW(objectRep),
        delVaccinePointMW(objectRep),
    );

    app.use('/vaccine/:oltopontid/new',
        //authenticationMW(objectRep),
        getVaccinePointMW(objectRep),
        saveVaccineMW(objectRep),
        renderMW(objectRep, 'addnewvakcina')
    );

    app.use('/vaccine/:oltopontid',
        //authenticationMW(objectRep),
        getVaccinePointMW(objectRep),
        getVaccinesMW(objectRep),
        renderMW(objectRep, 'vakcina')
    );

    app.use('/vaccinationpoint/new',
        //authenticationMW(objectRep),
        saveVaccinePointMW(objectRep),
        renderMW(objectRep, 'addnewoltopont')
    );

    app.get('/information', 
        renderMW(objectRep, 'public_oltopontok')
    );

    app.get('/vaccinationpoint',
        //authenticationMW(objectRep),
        getVaccinePointsMW(objectRep),
        renderMW(objectRep, 'oltopontok')
    );

    app.use('/logout',
        logoutMW(objectRep)
    );

    app.use('/',
        //checkpassMW(objectRep),
        renderMW(objectRep, 'index')
    );

    
}