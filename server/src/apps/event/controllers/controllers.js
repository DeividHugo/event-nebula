const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo à API EventNebula!');
});

export app