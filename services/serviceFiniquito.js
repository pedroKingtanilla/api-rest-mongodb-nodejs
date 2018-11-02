var conectionFiniquito = require('../conecctions/finiquitoConection');
var modelFiniquito = require('../models/finiquitoModel');
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    let finiquitoBusqueda = modelFiniquito.find((err, finiquito) => {
        if(err){
            console.error('Error en GET: ' + err)
        } else {
            console.log(JSON.stringify(finiquito))
            res.send(finiquito);
        }
    });    
});

router.post('/', function(req, res) {
    console.log(JSON.stringify(req.body));
    let finiquitoCrear = new modelFiniquito({
        rut: req.body.rut,
        dv: req.body.dv,
        nombre: req.body.nombre,
        apellidoPaterno: req.body.apellidoPaterno,
        apellidoMaterno: req.body.apellidoMaterno,
        id_empleador: req.body.id_empleador,
        inicioContrato: req.body.inicioContrato,
        finContrato: req.body.finContrato,
        empresaFaena: req.body.empresaFaena
    });
    modelFiniquito.create(finiquitoCrear);
    res.send(finiquitoCrear);
});

router.delete('/', function(req, res) {
    modelFiniquito.deleteOne({rut : req.body.rut}, (err) =>{
        if(err)
            res.send(err);
        else
            res.send('Borrado....');
    });
});

router.put('/', function(req, res) {
    let valores = {
        nombre: req.body.nombre,
        apellidoPaterno: req.body.apellidoPaterno,
        apellidoMaterno: req.body.apellidoMaterno,
        id_empleador: req.body.id_empleador,
        inicioContrato: req.body.inicioContrato,
        finContrato: req.body.finContrato,
        empresaFaena: req.body.empresaFaena
    };
    
    modelFiniquito.updateOne({rut: req.body.rut}, valores, (err)=>{
        if(err)
            res.send(err);
        else
            res.send("Actualizado!!!!!!!!!!!!!!!!!!");
    })
    
});


module.exports = router;