const express = require('express');
const router = express.Router();

const {
    registrarIncidencias,
    listarIncidencias,
    buscarIncidenciaPorId,
    eliminarIncidencia
} = require('../controllers/incidenciasController.js');

router.post('/', registrarIncidencias);

//Listar incidencia
router.get('/', listarIncidencias);

//Buscar incidencia por ID
router.get('/:id', buscarIncidenciaPorId);

//Eliminar incidencia por ID
router.delete('/:id', eliminarIncidencia);

module.exports = router;