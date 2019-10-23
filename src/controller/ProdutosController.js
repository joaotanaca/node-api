const mongoose = require ('mongoose');

const Produtos = mongoose.model ('Produtos');

module.exports = {
  async index (req, res) {
    const produto = await Produtos.find ();
    return res.json (produto);
  },
  async show (req, res) {
    const page = req.params.page;
    const produto = await Produtos.paginate ({}, {sort:'title' ,page, limit: 12});

    return res.json (produto);
  },
  async showProduto (req, res) {
    const produto = await Produtos.findById(req.params.id);

    return res.json (produto);
  },
  async showCategoria (req, res) {
    const page = req.params.page;
    const produto = await Produtos.paginate (
      {
        categoria: req.params.categoria,
      },
      {page, limit: 12}
    );

    return res.json (produto);
  },
  async registro (req, res) {
    req.body.img = '/img/'+req.body.img+'_web.png' 
    const produto = await Produtos.create (req.body);

    return res.json (produto);
  },
  async update (req, res) {
    req.body.img = '/img/'+req.body.img+'_web.png'
    const produto = await Produtos.findByIdAndUpdate (req.params.id, req.body, {
      new: true,
    });

    return res.json (produto);
  },
  async updateOne (req, res) {
    req.body.img = '/img/'+req.body.img
    const produto = await Produtos.findOneAndUpdate (req.params.name, req.body, {
      new: true,
    });

    return res.json (produto);
  },
  async destruir (req, res) {
    const produto = await Produtos.findByIdAndDelete (req.params.id);

    return res.send ('Destruido');
  },
};
