const mongoose = require ('mongoose');

const Menu = mongoose.model ('Menu');

module.exports = {
  async index (req, res) {
    const menu = await Menu.find ();
    return res.json (menu);
  },
  async cadastro_menu (req, res) {
    const menu = await Menu.create (req.body).then(response=>{
      console.log('salvo com sucesso')
    });  
    return res.json (menu);
  },
};
