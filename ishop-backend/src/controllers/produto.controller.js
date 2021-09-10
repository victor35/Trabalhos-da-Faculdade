const mongoose = require('mongoose');
const Produto = require('../models/produto.model');

//index, show , store, update, destroyer

module.exports = {


    async show(req, res) {
        let alunos = await Produto.find();
        return res.json(alunos);
    },

    async store(req, res) {
        const produto = await Produto.create(req.body);

        return res.json(produto)
    },

    async index(req, res) {
        const produto = await Produto.findById(req.params.id)

        return res.json(produto)
    },

    async update(req, res) {
        console.log(req.body)
        const produto = await Produto.findByIdAndUpdate({_id:req.params.id}, req.body,{new:true})

        return res.json(produto)
    },

    async destroyer(req, res) {
        const ObjectId = mongoose.Types.ObjectId;
        const produto = await Produto.deleteOne({ _id: ObjectId(req.params.id) })

        return res.json(produto)
    },


}