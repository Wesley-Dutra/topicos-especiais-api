console.log("Arquivo server.js executado com sucesso");

// usar o express
const express = require('express');
const app = express();
app.use(express.json()); // para tratar json

// definir porta para a API de serviço
const port = process.env.PORT || 3000;
app.listen(port, () => {
    return console.log('API executando na porta ' + port);
});

// conexão com mongoBD
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://admin:admin@localhost:27018/BaseRequisicoes?authSource=BaseRequisicoes ";
MongoClient.connect(uri, (err, client) => {
    if (err)
        return console.log(err);
    db = client.db('BaseRequisicoes');
 });

 app.get('/', (req, res) => {
    res.send('Atendida a requisição GET!!');
});