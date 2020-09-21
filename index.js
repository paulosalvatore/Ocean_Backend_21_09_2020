const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Endpoints de envio de mensagens
// CRUD -> Create, Read (Read All e Read Single), Update and Delete
// CRUD -> Criar, Ler (Ler tudo e ler individualmente), atualizar e remover

// Read All
app.get('/mensagens', (req, res) => {
    res.send('Exibir toda a lista de mensagens.');
});

// Create
app.post('/mensagens', (req, res) => {
    res.send('Criar uma mensagem.');
});

// Read Single
app.get('/mensagens/:id', (req, res) => {
    res.send('Exibe uma mensagem selecionada pelo ID que foi informado.');
});

// Update
app.put('/mensagens/:id', (req, res) => {
    res.send('Atualiza uma mensagem selecionada pelo ID que foi informado.');
});

// Delete
app.delete('/mensagens/:id', (req, res) => {
    res.send('Remove uma mensagem selecionada pelo ID que foi informado.');
});

app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}`);
});
