const express = require('express');
const cors = require('cors');
const server = express();
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
});

client.connect();

const routes = require('./routes');

var port = process.env.PORT || 3333;

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(port, () => {
    console.log('SERVER ON')
});