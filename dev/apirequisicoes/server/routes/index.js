const { Router } = require("express");
const routes = Router();

// liberar origens para requisições
var cors = require('cors');
routes.use(cors({origin: '*'}));
//routes.use(cors({origin: 'http://localhost:3001'}));

// rotas para cada módulo
const colaboradorRout = require("./colaboradorRout");
routes.use("/api", colaboradorRout);
module.exports = routes;