const express = require ('express');
const routes = express.Router ();

const ProdutoController = require ('../controller/ProdutosController');

routes.get ('/', (req, res) => {
  return res.send ('<title>Index</title><h1>Index</h1>');
});

routes.get ('/produtos', ProdutoController.index);
routes.get ('/produtos/:id', ProdutoController.showProduto);
routes.get ('/produtos/page/:page/:categoria', ProdutoController.showCategoria);
routes.get ('/produtos/page/:page', ProdutoController.show);
routes.put ('/produtos/update/:id', ProdutoController.update);
routes.put ('/produtos/update/one/:name', ProdutoController.updateOne);
routes.delete ('/produtos/deletar/:id', ProdutoController.destruir);
routes.post ('/registrar_produtos', ProdutoController.registro);

module.exports = routes;
