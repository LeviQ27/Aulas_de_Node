const {EventEmitter} = require('events');

const evento = new EventEmitter()

console.log('---------------------------------------------------------');
console.log('Atividade Aula 07');
console.log('---------------------------------------------------------');
console.log(new Error('Mensagem de ERROR enviada por Levi'));
console.log('---------------------------------------------------------');
const profissoes = ['Pedreiro','Pintor','Piloto','Adestrador','Otorrinolaringologista','Analista de sistemas'];
console.table(profissoes);
console.log('---------------------------------------------------------');
const dadosPessoais = {
    nome: 'Santiago Bernabeu',
    endereco: 'Av. de Concha Espina, 1, 28036 Madrid, Espanha',
    telefone: '+34 91 398 43 00',
    data_de_nascimento: '14 de dezembro de 1947',
    cep: 28036,
    municipio: 'Madrid',
    estado: 'Madrid'    
}
console.table(dadosPessoais);
console.log('---------------------------------------------------------');