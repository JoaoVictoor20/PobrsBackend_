const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Cliente = require('./cliente');
const Produto = require('./produto');

//ID do pedido, Numero do pedido, Data do pedido, Qtd, 
const Pedido = sequelize.define("pedido", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    qtdPedido:{
        allowNull: false,
        type: Sequelize.INTEGER()
    },
    idCliente:{
        allowNull: true,
        type: Sequelize.INTEGER
    },
    idProduto:{
        allowNull: true,
        type: Sequelize.INTEGER
    }
});

Pedido.belongsTo(Cliente, {foreignKey: 'idCliente', allowNull: true});
Pedido.belongsTo(Produto, {foreignKey: 'idProduto', allowNull: false});

module.exports = Pedido;