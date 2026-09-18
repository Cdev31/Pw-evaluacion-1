const express = require('express');
const app = express();
const port = 3000;

//Middleware to parse JSON bodies
app.use(express.json());
const incidenciaRouter = require('./routes/incidenciaRouter.js');

app.use('/incidencias', incidenciaRouter);

const estadisticasRoutes = require('./routes/estadisticasRouter.js');

app.use('/estadisticas', estadisticasRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})