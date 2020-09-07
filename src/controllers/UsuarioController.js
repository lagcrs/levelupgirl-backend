const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Usuario.findAll({
            attributes: ['id', 'nome', 'sobrenome', 'email', 'user', 'soft_skills', 'hard_skills', 'tech_coins', 'pais', 'estado', 'cidade', 'telefone', 'biografia', 'facebook', 'linkedin', 'instagram']
        })
        .then(usuarios => res.status(200).json(usuarios))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por usuarios',
            error: err
        }))
    },

    async store(req, res) {
        const { nome, sobrenome, email, senha, user, soft_skills, hard_skills, tech_coins, pais, estado, cidade, telefone, biografia, facebook, linkedin, instagram } = req.body;

        await model.Usuario.create({
            nome, sobrenome, email, senha, user, soft_skills, hard_skills, tech_coins, pais, estado, cidade, telefone, biografia, facebook, linkedin, instagram 
        })
        .then(usuario => res.status(201).json({
            message: `Usuario ${usuario.nome} cadastrado com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar novo usuario',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { usuario_id } = req.query;

        await model.Usuario.findOne({
            where: { id: usuario_id },
            attributes: ['id', 'nome', 'sobrenome', 'email', 'user', 'soft_skills', 'hard_skills', 'tech_coins', 'pais', 'estado', 'cidade', 'telefone', 'biografia', 'facebook', 'linkedin', 'instagram']
        })
        .then(usuario => res.status(200).json({usuario}))
        .catch(err => res.status(400).json({
            message: 'Usuario nao existe',
            error: true,
            error: err
        })) 
    }
}