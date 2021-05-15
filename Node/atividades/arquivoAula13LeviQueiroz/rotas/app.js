const express = require('express');
const app = express.Router();

app.get('/:id' , (req , res)=>{

   res.send(`<h1> ${req.params.id}|  GET |  utilizado para realizar consultas</h1>`)

});
app.put('/:id' , (req , res)=>{

    res.send(`<h1> ${req.params.id} |  PUT |  utilizado para realizar modificacoes</h1>`)
 
 });
 app.patch('/:id' , (req , res)=>{

    res.send(`<h1> ${req.params.id} |  PATCH |  utilizado para realizar modificacoes parciais</h1>`)
 
 });
 app.post('/:id' , (req , res)=>{

    res.send(`<h1> ${req.params.id} |  POST |  utilizado para realizar insercoes</h1>`)
 
 });
 app.delete('/:id' , (req , res)=>{

    res.send(`<h1> ${req.params.id} |  DELETE |  utilizado para excluir</h1>`)
 
 });

 module.exports = app;

