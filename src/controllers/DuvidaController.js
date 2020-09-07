const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Duvida.findAll({
            attributes: ['id', 'autor_id', 'mensagem']
        })
        .then(duvidas => res.status(200).json(duvidas))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por duvidas',
            error: err
        }))
    },

    async store(req, res) {
        const { autor_id, mensagem } = req.body;

        await model.Duvida.create({
            autor_id, mensagem
        })
        .then(duvida => res.status(201).json({
            message: `Duvida ${duvida.id} cadastrada com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova duvida',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { duvida_id } = req.query;

        await model.Duvida.findOne({
            where: { id: duvida_id },
            attributes: ['id', 'autor_id', 'mensagem']
        })
        .then(duvida => res.status(200).json({duvida}))
        .catch(err => res.status(400).json({
            message: 'Duvida nao existe',
            error: true,
            error: err
        })) 
    }
}