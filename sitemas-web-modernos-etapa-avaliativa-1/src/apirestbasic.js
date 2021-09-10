const express = require('express');
const mongoose = require('mongoose');
const produtoController = require('./controllers/produto.controller')
const app = express();

const cors = require('cors');

mongoose.connect("mongodb+srv://testDWM:1234@cluster0.c5rw2.mongodb.net/testDWM?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json())

app.get('/', function(req,res){
    res.json({
        produtos:{id:12314, categoria:"informatica", nome:"mouse", descricao:"conecta no pv", preco:35.40},
        usuarios:{id:154, nome:"victor", email:"victor@gmail.com", senha:"1234"}
    })
});


// rotas produtos

app.get('/produtos', produtoController.show);

app.get('/produtos/:id', produtoController.index);

app.delete('/produtos/:id', produtoController.destroyer);

app.put('/produtos/:id', produtoController.update);


app.post('/produtos',produtoController.store);

//rotas usuarios

app.get('/usuarios', function(req,res){

    res.json({nome: req.query.nome});

});


app.delete('/usuarios/:id', function(req,res){

    res.json({id: req.params.id});

});

app.put('/produtos/:categoria', function(req,res){

    res.json({categoria: req.params.categoria});

});

app.put('/usuarios/:email', function(req,res){

    res.json({email: req.params.email});

});


app.post('/usuarios',function(req,res){
    res.json(req.body)
});



app.listen(4000)