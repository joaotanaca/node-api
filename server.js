const express = require ('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

//Iniciando o Back
const app = express ();
app.use(express.json())
app.use(cors(true))

//Iniciando o Banco
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology:true}).then(() => {
    console.log("Mongo DB Conectado")
}).catch((erro) => {
    console.log("Aconteceu o erro: " + erro)
});
requireDir('./src/model');
const Produto = mongoose.model('Produtos')

//Rotas
app.use('/', require('./src/routes/index'))

app.listen (3001);
