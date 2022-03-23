const express = require('express');
const routes = express.Router();
const controle = require('../controller/colaboradorCont');
// aqui deginem-se as rotas do módulo e o que executar no controller
routes.route('/colaboradores').get(controle.listar);
routes.route('/colaboradores').post(controle.incluir);
routes.route('/colaboradores').put(controle.alterar);
routes.route('/colaboradores/:id').delete(controle.excluir);
routes.route('/colaboradores/filtro/:filtro').get(controle.filtrar);
module.exports = routes;