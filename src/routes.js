const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const EmpresaController = require('./controllers/EmpresaController');
const VagaController = require('./controllers/VagaController');

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

module.exports = routes;