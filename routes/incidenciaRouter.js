const express = require('express');
const router = express.Router();


const {
    registrarIncidencias,
    cambiarEstado,
    clasificarIncidencia
} = require('../controllers/incidenciaController.js');


router.put('/:id/estado', cambiarEstado);
router.get('/:id/clasificacion', clasificarIncidencia);
router.post('/', registrarIncidencias);

module.exports = router;