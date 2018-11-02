var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var finiquitoSchema = new Schema({
    rut: Number,
    dv: String,
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    id_empleador: String,
    inicioContrato: Date,
    finContrato: Date,
    empresaFaena: String
});

var finiquito = mongoose.model('finiquito', finiquitoSchema);
module.exports = finiquito;
