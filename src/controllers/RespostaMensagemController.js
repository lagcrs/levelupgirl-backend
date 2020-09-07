const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Resposta_Mensagem.findAll({
            attributes: ['id', 'autor_id', 'mensagem_id', 'mensagem']
        })
        .then(respostaMensagem => res.status(200).json(respostaMensagem))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por respostaMensagem',
            error: err
        }))
    },

    async store(req, res) {
        const { autor_id, mensagem_id, mensagem } = req.body;

        await model.Resposta_Mensagem.create({
            autor_id, mensagem_id, mensagem
        })
        .then(respostaMensagem => res.status(201).json({
            message: `respostaMensagem ${respostaMensagem.id} cadastrada com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova respostaMensagem',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { respostaMensagem_id } = req.query;

        await model.Resposta_Mensagem.findOne({
            where: { id: respostaMensagem_id },
            attributes: ['id', 'autor_id', 'mensagem_id', 'mensagem']
        })
        .then(respostaMensagem => res.status(200).json({respostaMensagem}))
        .catch(err => res.status(400).json({
            message: 'respostaMensagem nao existe',
            error: true,
            error: err
        })) 
    }
}