const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("Foi!");
})

const rotas = require('./rotas');
app.use('/api', rotas);

const port =process.env.PORT || 3000;

app.set("port", port)

const server = http.createServer(index);

server.listen(port);