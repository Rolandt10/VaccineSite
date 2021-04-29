var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('static'));

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

