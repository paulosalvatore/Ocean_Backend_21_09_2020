const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Endpoints de envio de mensagens
// CRUD -> Create, Read (Read All e Read Single), Update and Delete
// CRUD -> Criar, Ler (Ler tudo e ler individualmente), atualizar e remover

const mensagens = [
    "Essa é uma mensagem",
    "Essa é outra mensagem"
];

// Read All
app.get('/mensagens', (req, res) => {
    res.json(mensagens);
});

// Create
app.post('/mensagens', (req, res) => {
    // Obtendo a mensagem que foi recebida através do body da requisição
    const mensagem = req.body.mensagem;

    // Insiro a mensagem na lista de mensagens
    mensagens.push(mensagem);

    const id = mensagens.length - 1;

    // Exibido o ID da mensagem, que no caso é o índice que ela foi adicionada
    res.send(`Mensagem criada. ID: ${id}.`);
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
