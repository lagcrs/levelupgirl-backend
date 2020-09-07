const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Vaga.findAll({
            attributes: ['id', 'titulo', 'empresa_id', 'localizacao', 'descricao', 'area', 'nivel_experiencia']
        })
        .then(vagas => res.status(200).json(vagas))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por vagas',
            error: err
        }))
    },

    async store(req, res) {
        const { titulo, empresa_nome, localizacao, descricao, area, nivel_experiencia } = req.body;

        const empresaId = await model.Empresa.findOne({
            where: { nome_fantasia: empresa_nome },
            attributes: ['id']
        })
        .then( id => { return id });

        await model.Vaga.create({
            titulo, empresa_id: empresaId['id'], localizacao, descricao, area, nivel_experiencia 
        })
        .then(vaga => res.status(201).json({
            message: `Vaga ${vaga.titulo} cadastrada com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova vaga',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { vaga_id } = req.query;

        await model.Vaga.findOne({
            where: { id: vaga_id },
            attributes: ['id', 'titulo', 'empresa_id', 'localizacao', 'descricao', 'area', 'nivel_experiencia']
        })
        .then(vaga => res.status(200).json({vaga}))
        .catch(err => res.status(400).json({
            message: 'Vaga nao existe',
            error: true,
            error: err
        })) 
    }
}