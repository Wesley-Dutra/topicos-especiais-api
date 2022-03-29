const TipoReq = require('../model/tipoReqSchema');

module.exports = {
    listar: async (req, res) => {
        TipoReq.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new TipoReq(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new TipoReq(req.body);
        TipoReq.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        TipoReq.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },

    filtrar2: async (req, res) => {
        TipoReq.find({
            $or: [
                    { nome: { $regex: req.params.filtro, $options: "i" } },
                    { email: { $regex: req.params.filtro, $options: "i" } },
            ],
        },(err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ nome: 1 }); // -1 decrescente 1 crescente
    },


    filtrar: async (req, res) => {
        const objetos = await TipoReq.find({
            $or: [
                    { nome: { $regex: req.params.filtro, $options: "i" } },
                    { email: { $regex: req.params.filtro, $options: "i" } },
            ],
        } ).sort({ nome: 1 }).exec();
        res.json(objetos);
    },


};