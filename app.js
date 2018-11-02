var service = require('./services/serviceFiniquito');
var express = require('express');
var app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', service);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

