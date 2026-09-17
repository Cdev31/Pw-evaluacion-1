const incidencias = [];

let siguienteId = 1;

function registrarIncidencias(req, res) {
    const {
        empleado,
        area,
        descripcion,
        prioridad
    } = req.body;

    //Validacion que todos los campos sean obligatorios
    if (!empleado || !area || !descripcion || !prioridad) {
        return res.status(400).json({
            error: 'Todos los campos son obligatorios'
        });
    }

    //Validacion que todos los campos excepto el id sean cadenas de texto
    if (typeof empleado !== 'string' || typeof area !== 'string' || typeof descripcion !== 'string' || typeof prioridad !== 'string') {
        return res.status(400).json({
            error: 'Todos los campos excepto el id deben ser cadenas de texto'
        });
    }

    if(empleado.trim() === '' || area.trim() === '' || descripcion.trim() === '' || prioridad.trim() === '') {
        return res.status(400).json({
            error: 'Todos los campos deben ser cadenas de texto no vacías'
        });
    }

    if(prioridad !== 'alta' && prioridad !== 'media' && prioridad !== 'baja') {
        return res.status(400).json({
            error: 'La prioridad debe ser alta, media o baja'
        });
    }

    const nuevaIncidencia = {
        id: siguienteId++,
        empleado: empleado.trim(),
        area: area.trim(),
        descripcion: descripcion.trim(),
        prioridad: prioridad.trim()
    };

    incidencias.push(nuevaIncidencia);

    return res.status(201).json({
        message: 'Incidencia registrada exitosamente'
    });
}

//Listar las incidencias
function listarIncidencias(req, res){
    return res.status(200).json(incidencias);
}

//Buscar incidencias por ID
function buscarIncidenciaPorId(req, res){
    const id = Number(req.params.id);

    const incidenciaEncontrada = incidencias.find(
        incidencia => incidencia.id === id
    );

    if(!incidenciaEncontrada){
        return res.status(404).json({
            error: 'Incidencia no encontrada'
        });
    }
    return res.status(200).json(incidenciaEncontrada);
}

//Eliminar incidencia
function eliminarIncidencia(req, res){
    const id = Number(req.params.id);

    const indice = incidencias.findIndex(
        incidencia => incidencia.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            error: 'Incidencia no encontrada'
        });
    }

    incidencias.splice(indice, 1);

    return res.status(200).json({
        message: 'Incidencia eliminada exitosamente'
    });
}

module.exports = {
    registrarIncidencias,
    listarIncidencias,
    buscarIncidenciaPorId,
    eliminarIncidencia
};