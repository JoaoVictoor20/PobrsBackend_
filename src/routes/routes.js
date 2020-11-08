const express = require('express');
const ClienteController = require ('../controllers/clienteController.js');
const PedidoController = require ('../controllers/pedidoController');
const ProdutoController = require('../controllers/produtoController');
//teste carrinho
const CarrinhoController = require('../controllers/carrinhoController');
const Cliente = require('../models/cliente.js');
const router = express.Router();

//Cliente
router.post('/cadastro/clientes', ClienteController.Insert);

router.get('/clientes', ClienteController.SelectAll);
router.get('/clientes/:id', ClienteController.SelectDetail);
router.put('/atualizarCliente/:id', ClienteController.Update);
router.delete('/clientes/:id', ClienteController.Delete);
//Pedido
router.post('/novoPedido/:idCliente', PedidoController.Insert);
router.get('/meusPedidos', PedidoController.SelectAll);
router.get('/pedidos/:idCliente', PedidoController.SelectPedidoCliente);
//Produto
router.get('/produtos', ProdutoController.SelectAll);
router.post('/cadastro/produtos', ProdutoController.Insert);
router.get('/produtos/:id', ProdutoController.SelectDetail);

// ROTA DE TESTE CRIAÇÃO DO CARRINHO
router.post('/carrinho', CarrinhoController.Insert); // Como cair aqui e voltar pra tela de compras rapidamente
//router.get('/:id/Meucarrinho', CarrinhoController.SelectDetail); //- -------------- TIRAR ----------- 

module.exports = router;