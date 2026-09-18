const express = require('express');
const router = express.Router();

const {
    registrarIncidencias,
} = require('../controllers/incidenciaController.js');

router.post('/', registrarIncidencias);

module.exports = router;