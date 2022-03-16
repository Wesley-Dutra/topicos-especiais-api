const mongoose = require("mongoose");

const uri = "mongodb://admin:admin@localhost:27018/BaseRequisicoes?authSource=BaseRequisicoes";

mongoose.connect(uri, { });