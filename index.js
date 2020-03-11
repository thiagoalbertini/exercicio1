const express = require('express');

const server = express();

server.use(express.json());

const tarefas = [
    {
        id: 1,
        descricao: "Comprar pão",
        finalizado: false
    }
];

server.get('/tarefas', function(request, response) {
    return response.json(tarefas);
})

server.listen(process.env.PORT || 3000);