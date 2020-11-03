// Quais informações o carrinho vai receber ? Quais colunas ? 
// ID do usuario como estrangeira e primaria ? isso é possivel ? já que só irá segurar temporariamente o valor
// Resposta sobre a linha 2 -> Não geraria inconsistencia, uma chave externa basta
/**As linhas/colunas devem ser preenchidos por metodo OnSubmit/Click pelos botões que retiram os dados e armazenam nesta tabela */
const Sequelize = require ('sequelize');
const sequelize = require ('../database/database');

const Cliente = require ('./cliente');
const Produto = require ('./produto');

const Carrinho = sequelize.define("carrinho", {
    id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    produto: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
            len: [3, 50]
        }
    },
    valorProduto: {
        allowNull: false,
        type: Sequelize.FLOAT
    },
})

//Carrinho.belongsTo(Cliente, {foreignKey: 'idCliente', allowNull: false});
//Carrinho.belongsTo(Produto, {foreignKey: 'idProduto', allowNull: false});

module.exports = Carrinho