const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Produto = sequelize.define("produto", {
    
    idProduto:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome:{
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]        
        }
    },
    ingredientes:{// Pode-se trocar por catProduto, é mais uma categorização do que um código em si
        allowNull: false,
        type: Sequelize.STRING(),
        validate: {
            len: [3, 100]
        }
    },
    precoVenda:{
        allowNull: false,
        type: Sequelize.FLOAT(),
        validate:{
            len: [0, 100]       
        }
    },
    qtdEstoque:{
        allowNull: false,
        type: Sequelize.INTEGER(),
        validate: {
            len: [0, 9999]
        }
    }  
});

module.exports = Produto;