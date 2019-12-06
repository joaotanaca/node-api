const express = require ('express');
const routes = express.Router ();

const MenuController = require ('../controller/MenuController');

routes.get ('/item', MenuController.index);
routes.post ('/cadastro_menu', MenuController.cadastro_menu);

module.exports = routes;
