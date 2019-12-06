const express = require ('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

//Iniciando o Back
const app = express ();
app.use(express.json())
app.use(cors(true))
// mongodb+srv://tanaca:c63QBPdRxjwpTgpc@bdmongo-orcgv.mongodb.net/admin?retryWrites=true&w=majority
//mongodb+srv://tanaca:c63QBPdRxjwpTgpc@bdmongo-orcgv.mongodb.net/test?retryWrites=true&w=majority
//Iniciando o Banco
mongoose.connect('mongodb+srv://tanaca:acfrases123@bdmongo-orcgv.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology:true}).then(() => {
    console.log("Mongo DB Conectado")
}).catch((erro) => {
    console.log("Aconteceu o erro: " + erro)
});

requireDir('./src/model');
const Produto = mongoose.model('Produtos')
const Menu = mongoose.model('Menu')

//Rotas
app.use('/', require('./src/routes/RoutesProdutos'))
app.use('/menu', require('./src/routes/RoutesMenu'))

app.listen (process.env.PORT || 3001);
