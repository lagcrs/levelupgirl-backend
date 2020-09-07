const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Forum.findAll({
            attributes: ['id', 'titulo', 'mensagem']
        })
        .then(forums => res.status(200).json(forums))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por forums',
            error: err
        }))
    },

    async store(req, res) {
        const { titulo, mensagem } = req.body;

        await model.Forum.create({
            titulo, mensagem
        })
        .then(forum => res.status(201).json({
            message: `Forum ${forum.id} cadastrado com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar novo forum',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { forum_id } = req.query;

        await model.Forum.findOne({
            where: { id: forum_id },
            attributes: ['id', 'titulo', 'mensagem']
        })
        .then(forum => res.status(200).json({forum}))
        .catch(err => res.status(400).json({
            message: 'Forum nao existe',
            error: true,
            error: err
        })) 
    }
}