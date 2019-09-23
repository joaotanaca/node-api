const express = require('express')
const routes = express.Router()

routes.get('/', (req,res)=>{
    return res.send('<title>Index</title><h1>Index</h1>')
})

routes.get('/produtos', (req,res)=>{
    return res.send('<title>Produtos</title><h1>Index de produtos</h1>')
})

module.exports = routes;