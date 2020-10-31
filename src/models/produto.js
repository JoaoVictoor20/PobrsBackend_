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
        },

    ingredientes :{
            allowNull: false,
            type: Sequelize.STRING(100),
            validate: {
                len: [3, 100]
            }

    },
    precoCusto:{
        allowNull: false,
        type: Sequelize.FLOAT()
    },
    precoVenda:{
        allowNull: false,
        type: Sequelize.FLOAT(),
        validate:{
            len: [0, 100]
        }
    },
    catProduto:{
        allowNull: false,
        type: Sequelize.INTEGER(),
        validate: {
            len: [0, 9999]
        }
    },
}
});

module.exports = Produto;