const Andamento = require('../model/andamentoSchema');

module.exports = {
    listar: async (req, res) => {
        Andamento.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ dataHora: 1 }); // -1 decrescente 1 crescente
    },

    incluir: async (req, res) => {
        let obj = new Andamento(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Andamento(req.body);
        Andamento.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        Andamento.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },

    filtrar: async (req, res) => {
        const objetos = await Andamento.find({
        $or: [
                { dataHora: { $regex: req.params.filtro, $options: "i" } },
                { titulo: { $regex: req.params.filtro, $options: "i" } },
                { descricao: {$regex: req.params.filtro, $options: "i"}},
        ],
        }, function (err) {
            if (err)
                res.status(400).send(err);
        }).sort({ dataHora: -1 }); // -1 decrescente 1 crescente
        res.json(objetos);
    },
};
