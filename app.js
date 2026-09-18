const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const incidenciaRouter = require('./routes/incidenciaRouter'); // <- AGREGAR ESTA LÍNEA

//Middleware to parse JSON bodies

app.use('/incidencias', incidenciaRouter);

const estadisticasRoutes = require('./routes/estadisticasRouter.js');

app.use('/estadisticas', estadisticasRoutes);

app.use('/incidencias', incidenciaRouter); // <- AGREGAR ESTA LÍNEA

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})