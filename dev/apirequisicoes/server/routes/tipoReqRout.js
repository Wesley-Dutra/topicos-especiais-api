const express = require('express');
const routes = express.Router();
const controle = require('../controller/tipoReqCont');
// aqui deginem-se as rotas do módulo e o que executar no controller
routes.route('/tipoReq').get(controle.listar);
routes.route('/tipoReq').post(controle.incluir);
routes.route('/tipoReq').put(controle.alterar);
routes.route('/tipoReq/:id').delete(controle.excluir);
routes.route('/tipoReq/filtro/:filtro').get(controle.filtrar);
module.exports = routes;