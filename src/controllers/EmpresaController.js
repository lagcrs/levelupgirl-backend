const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Empresa.findAll({
            attributes: ['id', 'razao_social', 'nome_fantasia', 'cnpj', 'email', 'senha', 'pais', 'estado', 'cidade', 'site']
        })
        .then(empresas => res.status(200).json(empresas))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por empresas',
            error: err
        }))
    },

    async store(req, res) {
        const { razao_social, nome_fantasia, cnpj, email, senha, pais, estado, cidade, site } = req.body;

        await model.Empresa.create({
            razao_social, nome_fantasia, cnpj, email, senha, pais, estado, cidade, site 
        })
        .then(empresa => res.status(201).json({
            message: `Empresa ${empresa.nome_fantasia} cadastrado com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova empresa',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { empresa_id } = req.query;

        await model.Empresa.findOne({
            where: { id: empresa_id },
            attributes: ['razao_social', 'nome_fantasia', 'cnpj', 'email', 'senha', 'pais', 'estado', 'cidade', 'site']
        })
        .then(empresa => res.status(200).json({empresa}))
        .catch(err => res.status(400).json({
            message: 'Empresa nao existe',
            error: true,
            error: err
        })) 
    }
}