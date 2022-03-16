const express = require('express');
const routes = express.Router();
const controle = require('../controller/colaboradorCont');
// aqui deginem-se as rotas do módulo e o que executar no controller
routes.route('/colaboradores').get(controle.listar);
module.exports = routes;