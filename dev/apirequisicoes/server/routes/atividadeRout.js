const express = require('express');
const routes = express.Router();
const controle = require('../controller/atividadeCont');
// aqui deginem-se as rotas do módulo e o que executar no controller
routes.route('/atividade').get(controle.listar);
routes.route('/atividade').post(controle.incluir);
routes.route('/atividade').put(controle.alterar);
routes.route('/atividade/:id').delete(controle.excluir);
routes.route('/atividade/filtro/:filtro').get(controle.filtrar);
module.exports = routes;