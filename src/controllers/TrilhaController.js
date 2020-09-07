const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Trilha.findAll({
            attributes: ['id', 'titulo', 'valor_techcoins', 'descricao']
        })
        .then(trilhas => res.status(200).json(trilhas))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por trilhas',
            error: err
        }))
    },

    async store(req, res) {
        const { titulo, valor_techcoins, descricao } = req.body;

        await model.Trilha.create({
            titulo, valor_techcoins, descricao
        })
        .then(trilha => res.status(201).json({
            message: `Trilha ${trilha.titulo} cadastrada com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova trilha',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { trilha_id } = req.query;

        await model.Trilha.findOne({
            where: { id: trilha_id },
            attributes: ['id', 'titulo', 'valor_techcoins', 'descricao']
        })
        .then(trilha => res.status(200).json({trilha}))
        .catch(err => res.status(400).json({
            message: 'Trilha nao existe',
            error: true,
            error: err
        })) 
    }
}