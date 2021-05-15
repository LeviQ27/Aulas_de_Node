const express = require('express');
const server = express();
server.use(express.json());


const usuarios = [];


server.post('/usuarios', (req, resp)=>{
    const nome = req.body.nome;
    const idade = req.body.idade;
    const id = usuarios.length + 1;


    usuarios.push({
        id,
        nome,
        idade
    });

    return resp.status(201).json(usuarios);

});

server.get('/usuarios', (req, resp)=>{
    return resp.status(200).json(usuarios);
});

server.put('/usuarios/:id', (req, resp)=>{
    const id = req.params.id;
    const idade = req.body.idade;

    usuarios[id - 1].idade = idade;

    return resp.status(201).json(usuarios);
});

server.delete('/usuarios/:id', (req, resp)=>{
    const id = req.params.id;

    let indice = -1;

    usuarios.map((usuario, index)=>{
        if (usuario.id == id) {
            indice = index;
        }

        return usuario;
    });

    if (indice === -1) {
        return resp.status(400).json({error: "Não existe nehnum usuario com esse identificador"});
    }

    usuarios.splice(indice, 1);

    return resp.status(200).send();

});



server.listen(3000, ()=>{
    console.log(`Servidor rodando em http://localhost:3000`);
})