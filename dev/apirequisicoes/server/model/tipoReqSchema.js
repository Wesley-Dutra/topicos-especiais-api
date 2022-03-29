const mongoose = require("mongoose");

const TipoReqSchema = new mongoose.Schema({
    titulo: { type: String},
    descricao: { type: String},
    status: { type: String},
    prazo: { type: Date},
    agendaInicio: { type: Date, required: true},
    dataHoraTermino: { type: Date},
});

module.exports = mongoose.model("TipoReq", TipoReqSchema);