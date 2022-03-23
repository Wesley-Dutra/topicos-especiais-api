const express = require('express');
const routes = express.Router();
const controle = require('../controller/andamentoCont');
// aqui deginem-se as rotas do módulo e o que executar no controller
routes.route('/andamento').get(controle.listar);
routes.route('/andamento').post(controle.incluir);
routes.route('/andamento').put(controle.alterar);
routes.route('/andamento/:id').delete(controle.excluir);
routes.route('/andamento/filtro/:filtro').get(controle.filtrar);
module.exports = routes;