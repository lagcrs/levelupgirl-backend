const model = require('../models/index');

module.exports = {
    async index(req, res) {
        await model.Mentoria.findAll({
            attributes: ['id', 'titulo', 'data', 'hora', 'mentora_id', 'link']
        })
        .then(mentorias => res.status(200).json(mentorias))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao procurar por mentorias',
            error: err
        }))
    },

    async store(req, res) {
        const { titulo, data, hora, mentora_id, link } = req.body;

        const usuarioId = await model.Usuario.findOne({
            where: { id: mentora_id },
            attributes: ['id']
        })
        .then( id => { return id });

        await model.Mentoria.create({
            titulo, data, hora, mentora_id: usuarioId['id'], link 
        })
        .then(mentoria => res.status(201).json({
            message: `Mentoria ${mentoria.titulo} cadastrada com sucesso`
        }))
        .catch(err => res.status(500).json({
            message: 'Erro inesperado ao cadastrar nova mentoria',
            error: true,
            error: err
        })) 
    },

    async show(req, res) {
        const { mentoria_id } = req.query;

        const usuarioId = await model.Mentoria.findOne({
            where: { id: mentoria_id },
            attributes: ['mentora_id']
        })
        .then( id => { return id });

        var data = usuarioId['dataValues']
        var idData = Object.values(data);

        const nome = await model.Usuario.findOne({
            where: { id: idData[0] },
            attributes: ['nome', 'sobrenome']
        })
        .then( nome => { return nome });

        var mentoraData = Object.values(nome['dataValues']);
        
        var nomeMentora = mentoraData[0] + ' ' + mentoraData[1];

        const mentoriaData = await model.Mentoria.findOne({
            where: { id: mentoria_id },
            attributes: ['id', 'titulo', 'data', 'hora', 'link']
        })
        .then( mentoria => { return mentoria });

        var dados = {
            "nomeMentora": nomeMentora,
            "dadosMentoria": mentoriaData['dataValues']
        }
        
        res.status(200).json(dados)

        .catch(err => res.status(400).json({
            message: 'Mentoria nao existe',
            error: true,
            error: err
        })) 
    }
}