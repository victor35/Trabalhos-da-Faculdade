const mongoose = require('mongoose')

const ProdutoSchema = new mongoose.Schema(
    {
        _id:{type:mongoose.Schema.Types.ObjectId, default: null},
        categoria:String,
        nome: String,
        descricao: String,
        preco:Number
    }
);

module.exports = mongoose.model('Produto', ProdutoSchema)