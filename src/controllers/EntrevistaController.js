const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Entrevista.findAll({
            attributes: ['id', 'data', 'hora', 'usuario_id', 'vaga_id', 'localizacao']
        })
        .then(entrevistas => res.status(200).json(entrevistas))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por entrevistas',
            error: err
        }))
    },

    async store(req, res) {
        const { data, hora, usuario_id, vaga_id, localizacao } = req.body;

        await model.Entrevista.create({
            data, hora, usuario_id, vaga_id, localizacao
        })
        .then(entrevista => res.status(201).json({
            message: `Entrevista marcada às ${entrevista.hora} cadastrada com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova empresa',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { entrevista_id } = req.query;

        const usuarioId = await model.Entrevista.findOne({
            where: { id: entrevista_id },
            attributes: ['usuario_id']
        })
        .then( id => { return id });

        var data = usuarioId['dataValues']
        var idData = Object.values(data);

        const nome = await model.Usuario.findOne({
            where: { id: idData[0] },
            attributes: ['nome', 'sobrenome']
        })
        .then( nome => { return nome });

        var candidataData = Object.values(nome['dataValues'])
        
        var nomeCandidata = candidataData[0] + ' ' + candidataData[1]
        
        const entrevistaData = await model.Entrevista.findOne({
            where: { id: entrevista_id },
            attributes: ['id', 'data', 'hora', 'vaga_id', 'localizacao']
        })
        .then( entrevista => { return entrevista });

        var dados = {
            "nomeCandidata": nomeCandidata,
            "dadosEntrevista": entrevistaData['dataValues']
        }
        
        res.status(200).json(dados)

        .catch(err => res.status(400).json({
            message: 'entrevista nao existe',
            error: true,
            error: err
        }));

    }
}