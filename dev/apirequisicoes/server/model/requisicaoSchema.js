const mongoose = require("mongoose");

const RequisicaoSchema = new mongoose.Schema({
    titulo: { type: String},
    descricao: { type: String},
    dataHoraCriada: { type: Date},
    status: { type: String},
    prazoAtendimento: { type: Date},
    
});

module.exports = mongoose.model("Requisicao", RequisicaoSchema);