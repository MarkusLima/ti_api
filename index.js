const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send("Foi!");
})

const rotas = require('./rotas');
app.use('/api', rotas);
/*app.get('/api', (req , res) =>{
    res.send('Foi tbm!');
})*/

const port = 3000;

app.listen(port , () => { console.log('http://localhost:',port)});