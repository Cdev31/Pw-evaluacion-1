const express = require('express');
const app = express();
const port = 3000;

//Middleware to parse JSON bodies
app.use(express.json());

app.get('/prueba', (req, res) => {
    res.send('ESTE ES MI SERVIDOR');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
})