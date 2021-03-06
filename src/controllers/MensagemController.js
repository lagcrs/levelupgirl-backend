const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Mensagem.findAll({
            attributes: ['id', 'autor_id', 'mensagem']
        })
        .then(mensagens => res.status(200).json(mensagens))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por mensagens',
            error: err
        }))
    },

    async store(req, res) {
        const { autor_id, mensagem } = req.body;

        await model.Mensagem.create({
            autor_id, mensagem
        })
        .then(mensagem => res.status(201).json({
            message: `Mensagem ${mensagem.id} cadastrada com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova mensagem',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { mensagem_id } = req.query;

        await model.Mensagem.findOne({
            where: { id: mensagem_id },
            attributes: ['id', 'autor_id', 'mensagem']
        })
        .then(mensagem => res.status(200).json({mensagem}))
        .catch(err => res.status(400).json({
            message: 'Mensagem nao existe',
            error: true,
            error: err
        })) 
    }
}