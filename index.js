var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('static'));

require('./routes/index.js')(app);

var server = app.listen(3000);