const {EventEmitter} = require('events');

const evento = new EventEmitter();

const nome = '';
const idade = '';

const objRecebe = [{
    nome: nome,
    data: idade
}];

evento.on('recebe', (nomeUsuario, dataUsuario)=>{
    objRecebe.push({
        nome: nomeUsuario,
        data: dataUsuario
    });
    
    console.table(objRecebe);
})

evento.emit('recebe', 'Gustavo', '25/04/2000');
evento.emit('recebe', 'Jonas', '08/09/1975');