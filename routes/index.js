const authenticationMW = require('../middleware/authenticationMW');
const checkpassMW = require('../middleware/checkPassMW');
const logoutMW = require('../middleware/logoutMW');
const renderMW = require('../middleware/renderMW');
const delVaccineMW = require('../middleware/vaccine/delVaccineMW');
const getVaccineMW = require('../middleware/vaccine/getVaccineMW');
const getVaccinesMW = require('../middleware/vaccine/getVaccinesMW');
const saveVaccineMW = require('../middleware/vaccine/saveVaccineMW');
const delVaccinePointMW = require('../middleware/vaccinationpoint/delVaccPointMW');
const getVaccinePointMW = require('../middleware/vaccinationpoint/getVaccPointMW');
const getVaccinePointsMW = require('../middleware/vaccinationpoint/getVaccPointsMW');
const saveVaccinePointMW = require('../middleware/vaccinationpoint/saveVaccinePointMW');


module.exports = function(app) {

    let objectRep = {};

    app.get('/', function(req, res, next) {
        checkpassMW(objectRep);
        renderMW(objectRep, 'index');
    });

    app.get('/information', function(req, res, next) {
        renderMW(objectRep, 'public_oltopontok');
    });

    app.get('/vaccinationpoint', function(req, res, next) {
        authenticationMW(objectRep);
        getVaccinePointsMW(objectRep);
        renderMW(objectRep, 'oltopontok');
    });

    app.use('/vaccinationpoint/new', function(req, res, next) {
        authenticationMW(objectRep);
        saveVaccinePointMW(objectRep);
        renderMW(objectRep, 'addnewoltopont');
    });

    app.use('/vaccinationpoint/edit/:oltopontid', function(req, res, next) {
        authenticationMW(objectRep);
        getVaccinePointMW(objectRep);
        saveVaccinePointMW(objectRep);
        renderMW(objectRep, 'editoltopont');
    });

    app.get('/vaccinationpoint/delete/:oltopontid', function(req, res, next) {
        authenticationMW(objectRep);
        getVaccinePointMW(objectRep);
        delVaccinePointMW(objectRep);
    });

    app.use('/vaccine/:oltopontid', function(req, res, next) {
        authenticationMW(objectRep);
        getVaccinePointMW(objectRep);
        getVaccinesMW(objectRep);
        renderMW(objectRep, 'vakcina');
    });

    app.use('/vaccine/:oltopontid/new', function(req, res, next) {
        authenticationMW(objectRep);
        getVaccinePointMW(objectRep);
        saveVaccineMW(objectRep);
        renderMW(objectRep, 'addnewvakcina');
    });

    app.use('/vaccine/:oltopontid/edit/:vakcinaid', function(req, res, next) {
        authenticationMW(objectRep);
        getVaccinePointMW(objectRep);
        getVaccineMW(objectRep);
        saveVaccineMW(objectRep);
        renderMW(objectRep, 'editvakcina');
    });

    app.use('/vaccine/:oltopontid/decrease/:vakcinaid', function(req, res, next) {
        authenticationMW(objectRep);
        getVaccinePointMW(objectRep);
        getVaccineMW(objectRep);
    });

    app.use('/vaccine/:oltopontid/increase/:vakcinaid', function(req, res, next) {
        authenticationMW(objectRep);
        getVaccinePointMW(objectRep);
        getVaccineMW(objectRep);
    });

    app.get('/vaccine/:oltopontid/delete/:vakcinaid', function(req, res, next) {
        authenticationMW(objectRep);
        getVaccinePointMW(objectRep);
        getVaccineMW(objectRep);
        delVaccineMW(objectRep);
    });

    app.use('/logout', function(req, res, next) {
        logoutMW(objectRep);
    });

    
}