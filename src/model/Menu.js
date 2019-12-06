const mongoose = require('mongoose');

const MenuEsquema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
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

mongoose.model('Menu', MenuEsquema);

// const novoMenu = mongoose.model('Menu') 

// new novoMenu({
//     title: "Notícias",
//     url: "/noticias"
// }).save()