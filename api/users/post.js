const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const db = getUsersFromDataset();

app.post('/api/post', (req, res) => {
    try {
        const { age ,name ,gender , company, isActive } = req.body;
        const sqlQuery = 'INSERT INTO db (email, name, password) VALUES ($1, $2, $3, $4, $5)';
        res.status(500).send("Datos recibidos");
    }
    catch (error) {
        res.status(500).send("Hubo un error al procesar los datos, intente nuevamente");
    }
});