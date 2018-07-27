const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({
        mensagem: 'Seja bem vindo ao PC do Bruno! Consulte /pastas para informações de pasta'
    });
});

app.get('/pastas', (req, res) => {
    res.send({
        mensagem: 'Acabou a pasta!'
    });
});

app.post('/pastas', (req, res) => {
    res.send({
        mensagem: 'Recebi um post',
        dados: req.body
    });
    
});

app.listen(3000, () => console.log("Servidor inicializado"));