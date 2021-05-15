const express = require('express');
const segundaRota = express.Router();

const usuarios = [];

segundaRota.post('/', (req, res)=>{
    let body = req.body;
    res.send(`Curso: ${body.curso}\nEmpresa: ${body.empresa}\nProfessor: ${body.professor}`)
});

segundaRota.put('/:id', (req, res)=>{
    res.send(`Metodo PUT utilizado para atualizar o id ${req.params.id}`)
});

segundaRota.patch('/:id', (req, res)=>{
    res.send(`Metodo PATCH utilizado para atualizar o id ${req.params.id}`)
});

segundaRota.delete('/:id', (req, res)=>{
    res.send(`Metodo DELETE utilizado para atualizar o id ${req.params.id}`)
});

module.exports = segundaRota;