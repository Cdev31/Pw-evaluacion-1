const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const incidenciaRouter = require('./routes/incidenciaRouter'); 

//Middleware to parse JSON bodies


app.get('/prueba', (req, res) => {
    res.send('ESTE ES MI SERVIDOR');
});

app.use('/incidencias', incidenciaRouter); 

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})