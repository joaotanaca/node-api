const mongoose = require ('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

const ProdutoEsquema = new mongoose.Schema ({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ProdutoEsquema.plugin (mongoosePaginate);

mongoose.model ('Produtos', ProdutoEsquema);
