const express = require('express');
const router = express.Router();

const {
    obtenerEstadisticas
} = require('../controllers/incidenciaController');

router.get('/', obtenerEstadisticas);

module.exports = router;