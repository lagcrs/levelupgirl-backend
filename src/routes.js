const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const EmpresaController = require('./controllers/EmpresaController');
const VagaController = require('./controllers/VagaController');
const EntrevistaController = require('./controllers/EntrevistaController');
const MentoriaController = require('./controllers/MentoriaController');
const SessaoController = require('./controllers/SessaoController');
const TrilhaController = require('./controllers/TrilhaController');
const ProgressoController = require('./controllers/ProgressoController');
const DuvidaController = require('./controllers/DuvidaController');
const RespostaDuvidaController = require('./controllers/RespostaDuvidaController');
const ForumController = require('./controllers/ForumController');
const RespostaForumController = require('./controllers/RespostaForumController');
const MensagemController = require('./controllers/MensagemController');
const RespostaMensagemController = require('./controllers/RespostaMensagemController');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('LevelUp, Girl! Backend');
});

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.show);
routes.post('/usuario/cadastrar', UsuarioController.store);

routes.get('/empresas', EmpresaController.index);
routes.get('/empresa/:id', EmpresaController.show);
routes.post('/empresa/cadastrar', EmpresaController.store);

routes.get('/vagas', VagaController.index);
routes.get('/vaga/:id', VagaController.show);
routes.post('/vaga/cadastrar', VagaController.store);

routes.get('/entrevistas', EntrevistaController.index);
routes.get('/entrevista/:id', EntrevistaController.show);
routes.post('/entrevista/cadastrar', EntrevistaController.store);

routes.get('/mentorias', MentoriaController.index);
routes.get('/mentoria/:id', MentoriaController.show);
routes.post('/mentoria/cadastrar', MentoriaController.store);

routes.get('/sessoes', SessaoController.index);
routes.get('/sessao/:id', SessaoController.show);
routes.post('/sessao/cadastrar', SessaoController.store);

routes.get('/trilhas', TrilhaController.index);
routes.get('/trilha/:id', TrilhaController.show);
routes.post('/trilha/cadastrar', TrilhaController.store);

routes.get('/progressos', ProgressoController.index);
routes.get('/progresso/:id', ProgressoController.show);
routes.post('/progresso/cadastrar', ProgressoController.store);

routes.get('/duvidas', DuvidaController.index);
routes.get('/duvida/:id', DuvidaController.show);
routes.post('/duvida/cadastrar', DuvidaController.store);

routes.get('/respostas_duvidas', RespostaDuvidaController.index);
routes.get('/resposta_duvida/:id', RespostaDuvidaController.show);
routes.post('/resposta_duvida/cadastrar', RespostaDuvidaController.store);

routes.get('/forums', ForumController.index);
routes.get('/forum/:id', ForumController.show);
routes.post('/forum/cadastrar', ForumController.store);

routes.get('/respostas_forums', RespostaForumController.index);
routes.get('/resposta_forum/:id', RespostaForumController.show);
routes.post('/resposta_forum/cadastrar', RespostaForumController.store);

routes.get('/mensagens', MensagemController.index);
routes.get('/mensagem/:id', MensagemController.show);
routes.post('/mensagem/cadastrar', MensagemController.store);

routes.get('/respostas_mensagens', RespostaMensagemController.index);
routes.get('/resposta_mensagem/:id', RespostaMensagemController.show);
routes.post('/resposta_mensagem/cadastrar', RespostaMensagemController.store);

module.exports = routes;