const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Progresso.findAll({
            attributes: ['id', 'usuario_id', 'trilha_id']
        })
        .then(progressos => res.status(200).json(progressos))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por progressos',
            error: err
        }))
    },

    async store(req, res) {
        const { usuario_id, trilha_id } = req.body;

        await model.Progresso.create({
            usuario_id, trilha_id
        })
        .then(progresso => res.status(201).json({
            message: `Progresso ${progresso.id} cadastrado com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova progresso',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { progresso_id } = req.query;

        await model.Progresso.findOne({
            where: { id: progresso_id },
            attributes: ['id', 'usuario_id', 'trilha_id']
        })
        .then(progresso => res.status(200).json({progresso}))
        .catch(err => res.status(400).json({
            message: 'Progresso nao existe',
            error: true,
            error: err
        })) 
    }
}