const Pedido = require('../models/pedido');
const status = require('http-status');

const Cliente = require('../models/cliente');
const TabelaProduto = require('../models/produto');

exports.Insert =  (req, res, next) => {
    const qtdPedido = req.body.qtdPedido;
    const idCliente = req.body.idCliente;
    const idProduto = req.params.idProduto;
    const precoVenda = req.body.precoVenda
    

    Pedido.create({
       
        qtdPedido: qtdPedido,
        idCliente: idCliente,
        idProduto: idProduto,
        precoVenda: precoVenda

    })

        .then(pedido => {
            if (pedido){
                res.status(status.OK).send(pedido);
            }else{
                res.status(status.NOT_FOUND).send();
            }
        })

        .catch(error => next(error));
};