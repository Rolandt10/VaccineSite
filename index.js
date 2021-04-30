var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('static'));
app.use(session({
    secret: 'secret'
}));

require('./routes/index.js')(app);

var server = app.listen(3000);

const OltopontModel = require('./models/oltopont');

let oltopont = new OltopontModel();
oltopont.cim = 'asd';
oltopont.telefonszam = '123123123';
oltopont.email = 'email';
oltopont.hutes = true;
oltopont.save((err) => {
    console.log(err);
});

