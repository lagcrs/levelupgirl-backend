const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Sessao.findAll({
            attributes: ['id', 'mentoria_id', 'participante_id']
        })
        .then(sessoes => res.status(200).json(sessoes))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por sessoes',
            error: err
        }))
    },

    async store(req, res) {
        const { mentoria_id, participante_id } = req.body;

        await model.Sessao.create({
            mentoria_id, participante_id
        })
        .then(sessao => res.status(201).json({
            message: `Sessao ${sessao.id} cadastrado com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova sessao',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { sessao_id } = req.query;

        await model.Sessao.findOne({
            where: { id: sessao_id },
            attributes: ['id', 'mentoria_id', 'participante_id']
        })
        .then(sessao => res.status(200).json({sessao}))
        .catch(err => res.status(400).json({
            message: 'Sessao nao existe',
            error: true,
            error: err
        })) 
    }
}