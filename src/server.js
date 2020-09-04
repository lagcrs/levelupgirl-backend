const express = require('express');
const cors = require('cors');
const server = express();

const routes = require('./routes');

var port = process.env.PORT || 3333;

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(port, () => {
    console.log('SERVER ON')
});