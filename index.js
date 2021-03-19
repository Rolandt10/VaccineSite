var express = require('express');
var app = express();

require('./routes/index')(app);

app.use(express.static('static'));

var server = app.listen(3000);