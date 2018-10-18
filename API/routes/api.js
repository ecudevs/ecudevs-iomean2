const express = require('express');
const router = express.Router();

const productoDAO = require('../models/productoDAO');

router.get('/', (req, res) => {
    res.send({ hola: 'Hola mundo'});
});

router.get('/saludar/', (req, res) => {
    res.send({ mensaje: 'hola!' });
});

router.get('/saludar/:nombre', (req, res) => {
    res.send({ mensaje: 'Hola ' + req.params.nombre + ' por get param.' });
});

router.post('/saludar', (req, res) => {
    res.send({ mensaje: 'Hola ' + req.body.nombre + ' por post.' });
});

router.put('/saludar', (req, res) => {
    res.send({ mensaje: 'Hola ' + req.body.nombre + ' por put.' });
});

// RUTAS PERSONALIZADAS
router.get('/productos/', (req, res) => {

    productoDAO.get()
    .then(registros=>{
        res.send({data: registros});
    })
    .catch(error=>res.send({error}));
});

router.post('/productos/', (req, res) => {

    productoDAO.insert(req.body)
        .then(guardado => {
            res.send({ data: guardado });
        })
        .catch(error => res.send({ error }));
});

module.exports = router;