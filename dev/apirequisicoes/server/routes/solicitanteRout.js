const express = require('express');
const routes = express.Router();
const controle = require('../controller/solicitanteCont');
// aqui deginem-se as rotas do módulo e o que executar no controller
routes.route('/solicitante').get(controle.listar);
routes.route('/solicitante').post(controle.incluir);
routes.route('/solicitante').put(controle.alterar);
routes.route('/solicitante/:id').delete(controle.excluir);
routes.route('/solicitante/filtro/:filtro').get(controle.filtrar);
module.exports = routes;