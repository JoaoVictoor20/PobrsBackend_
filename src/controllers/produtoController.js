const Produto = require('../models/produto');
const status = require('http-status');

exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const ingredientes = req.body.ingredientes;
    const precoVenda = req.body.precoVenda;
    const id = req.body.id;
    const qtdPedido = req.body.qtdPedido
  
    

    Produto.create({
        
        nome: nome,
        ingredientes: ingredientes,
        precoVenda: precoVenda,
        id: id,
        qtdPedido : qtdPedido
    })

        .then(produto => {
            if (produto){
                res.status(status.OK).send(produto);
            }else{
                res.status(status.NOT_FOUND).send();
            }
        })

        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Produto.findAll()
        .then(produto => {
            if(produto) {
                res.status(status.OK).send(produto);
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.body.id; 
    const qtdPedido = req.body.qtdPedido; 
};