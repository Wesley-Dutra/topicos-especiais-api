const mongoose = require("mongoose");

const AndamentoSchema = new mongoose.Schema({
    dataHora: { type: Date},
    titulo: { type: String},
    descricao: { type: String},
});

module.exports = mongoose.model("Andamento", AndamentoSchema);