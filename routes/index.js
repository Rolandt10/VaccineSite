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
    app.get('/', function(req, res, next) {

    });

    app.get('/information', function(req, res, next) {
        
    });

    app.get('/vaccinationpoint', function(req, res, next) {
        
    });

    app.use('/vaccinationpoint/new', function(req, res, next) {
        
    });

    app.use('/vaccinationpoint/edit/:oltopontid', function(req, res, next) {
        
    });

    app.get('/vaccinationpoint/delete/:oltopontid', function(req, res, next) {
        
    });

    app.get('/vaccinationpoint/delete/:oltopontid', function(req, res, next) {
        
    });

    app.use('/vaccine/:oltopontid/new', function(req, res, next) {
        
    });

    app.use('/vaccine/:oltopontid/edit/:vakcinaid', function(req, res, next) {
        
    });

    app.use('/vaccine/:oltopontid/decrease/:vakcinaid', function(req, res, next) {
        
    });

    app.use('/vaccine/:oltopontid/increase/:vakcinaid', function(req, res, next) {
        
    });

    app.get('/vaccine/:oltopontid/delete/:vakcinaid', function(req, res, next) {
        
    });

    
}