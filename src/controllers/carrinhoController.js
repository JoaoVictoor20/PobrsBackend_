// Ao apertar botão adicionar ao carrinho, popula a tabela, ao comprar exclui todos e insere novos no MeusPedidos
const Carrinho = require ('../models/CarrinhoT');
const status = require('http-status');

exports.Insert = (req, res, next) => {
    //const idCliente = req.params.id;
    //const idProduto = req.body.idproduto; // é enviado pelo botão ao ser clickado, ai vou tentar pega-lo aqui
    const produto = req.body.produto; /* mesma coisa do de cima, tentar pegar por aqui, (Será q da pra importar
     pra ca o model e acessar por ele, ou crio uma func onClick q armazena o valor em uma variavel)*/
    const valorProduto = req.body.valorProduto; //Ou colocar precoVenda ? q é o nome da coluna no produto

    Carrinho.create({
        produto: produto,
        valorProduto: valorProduto
    })
    .then(carrinho => {
        if (carrinho){
            res.status(status.OK).send(carrinho);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};
//**************************************** GET MEU CARRINHO ATUAL COMO VAI SER ==================================== */
exports.SelectDetail = (req, res, next) =>{//https://sequelize.org/master/manual/model-querying-finders.html
    const id = req.params.id;

    Carrinho.findAll({where: {idCliente: id}}) 
        .then(carrinho => {
            if (carrinho) {
                res.status(status.OK).send(carrinho);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next (error));
}