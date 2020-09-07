const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Resposta_Forum.findAll({
            attributes: ['id', 'autor_resposta_id', 'forum_id', 'mensagem']
        })
        .then(respostaForum => res.status(200).json(respostaForum))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por respostaDuvida',
            error: err
        }))
    },

    async store(req, res) {
        const { autor_resposta_id, forum_id, mensagem } = req.body;

        await model.Resposta_Forum.create({
            autor_resposta_id, forum_id, mensagem
        })
        .then(respostaForum => res.status(201).json({
            message: `respostaForum ${respostaForum.id} cadastrada com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova respostaForum',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { respostaForum_id } = req.query;

        await model.Resposta_Forum.findOne({
            where: { id: respostaForum_id },
            attributes: ['id', 'autor_resposta_id', 'forum_id', 'mensagem']
        })
        .then(respostaForum => res.status(200).json({respostaForum}))
        .catch(err => res.status(400).json({
            message: 'respostaForum nao existe',
            error: true,
            error: err
        })) 
    }
}