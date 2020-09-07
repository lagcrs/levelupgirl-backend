const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const EmpresaController = require('./controllers/EmpresaController');

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

module.exports = routes;