const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Resposta_Duvida.findAll({
            attributes: ['id', 'autor_resposta_id', 'duvida_id', 'mensagem']
        })
        .then(respostaDuvida => res.status(200).json(respostaDuvida))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por respostaDuvida',
            error: err
        }))
    },

    async store(req, res) {
        const { autor_resposta_id, duvida_id, mensagem } = req.body;

        await model.Resposta_Duvida.create({
            autor_resposta_id, duvida_id, mensagem
        })
        .then(respostaDuvida => res.status(201).json({
            message: `Duvida ${respostaDuvida.id} cadastrada com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova respostaDuvida',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { respostaDuvida_id } = req.query;

        await model.Resposta_Duvida.findOne({
            where: { id: respostaDuvida_id },
            attributes: ['id', 'autor_resposta_id', 'duvida_id', 'mensagem']
        })
        .then(respostaDuvida => res.status(200).json({respostaDuvida}))
        .catch(err => res.status(400).json({
            message: 'respostaDuvida nao existe',
            error: true,
            error: err
        })) 
    }
}