
const incidencias = [];

let siguienteId = 1;

function registrarIncidencias(req, res) {
    const {
        empleado,
        area,
        descripcion,
        prioridad,
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

function cambiarEstado(req, res) {
  const id = Number(req.params.id);
  const { estado } = req.body;
  const incidencia = incidencias.find(inc => inc.id === id);
  if (!incidencia) {
    return res.status(404).json({ mensaje: 'Incidencia no encontrada' });
  }

  switch (estado) {
    case 'Pendiente':
    case 'En Proceso':
    case 'Resuelta':
    case 'Cancelada':
      incidencia.estado = estado;
      res.json({ mensaje: 'Estado actualizado', incidencia });
      break;
    default:
      res.status(400).json({ mensaje: 'Estado inválido' });
  }
}

function clasificarIncidencia(req, res) {
  const id = Number(req.params.id);
  const incidencia = incidencias.find(inc => inc.id === id);

  if (!incidencia) {
    return res.status(404).json({ mensaje: 'Incidencia no encontrada' });
  }

  let clasificacion;
  switch (incidencia.prioridad) {
    case 'Alta':
      clasificacion = 'Crítica';
      break;
    case 'Media':
      clasificacion = 'Importante';
      break;
    case 'Baja':
      clasificacion = 'Normal';
      break;
  }

  res.json({ id: incidencia.id, clasificacion });
}

module.exports = {
    registrarIncidencias,
    cambiarEstado,
    clasificarIncidencia
};