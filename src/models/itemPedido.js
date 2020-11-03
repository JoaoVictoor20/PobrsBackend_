const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

// ------------------- pedidos de um cliente em especifico parcialmente --------------------
const itemPedido = sequelize.define("sacola", {
    idSacola: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    lanche: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    
})