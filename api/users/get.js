const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const db = getUsersFromDataset();

app.get('/', (req, res) => { //ejemplo de get
    res.send('API funcionando!');
});


app.get('/api/getrequest', function (req, res) { //funcion get
    const name = req.body;
    const sqlQuery = "SELECT (name), FROM db, ORDER BY age DESC;"
    res.status(200).send(sqlQuery);
  });