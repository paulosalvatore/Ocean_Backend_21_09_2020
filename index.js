const express = require('express');
const app = express();
const port = 3000;

app.get('/', function (request, response) {
    response.send('Hello world!');
});

// 

app.post('/', function (request, response) {
    response.send('POST Hello world!');
});

app.listen(port, function () {
    console.log(`App rodando em http://localhost:${port}`);
});
