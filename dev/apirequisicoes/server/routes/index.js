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

const andamentoRout = require("./andamentoRout");
routes.use("/api", andamentoRout);
module.exports = routes;

const atividadeRout = require("./atividadeRout");
routes.use("/api", atividadeRout);
module.exports = routes;

const requisicaoRout = require("./requisicaoRout");
routes.use("/api", requisicaoRout);
module.exports = routes;