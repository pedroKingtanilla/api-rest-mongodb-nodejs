var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/finiquito', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Conectado a DBfiniquito!!!!!!!!!')
});

module.exports = db;