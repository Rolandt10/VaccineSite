var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('static'));

require('./routes/index.js')(app);

var server = app.listen(3000);

const OltopontModel = require('./models/vakcina');

let oltopont = new OltopontModel();
oltopont.gyarto = 'Pfizer';
oltopont.generacio = 1;
oltopont.darabszam = 10000;
oltopont.save((err) => {
    console.log(err);
});

