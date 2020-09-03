const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('LevelUp, Girl! Backend');
})

module.exports = routes;