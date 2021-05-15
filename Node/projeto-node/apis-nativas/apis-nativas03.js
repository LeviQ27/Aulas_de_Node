/** CONSOLE */

console.log('Hackaton Stefanini, Aprendendo Node JS')
console.log('******************************************************************')

console.error(new Error('Error encontrado!!!'))
console.log('******************************************************************')

const timesCariocas = ['Vascaino','Florminense','Bostafogo','Octa Campeão']
console.table(timesCariocas)
const objTeste = {
    nome: 'Thiago Leite',
    empresa: 'Stefanini Group',
    curso: 'NodeJS'
}
console.table(objTeste)
console.log('*****************************************************************')
console.count('contador01')
console.count('contador01')
console.count('contador01')
console.count('contador02')
console.countReset('contador01')
console.count('contador01')
console.log('*****************************************************************')

/** INICIO DO CONTADOR */
console.time('tempo')
for (let index = 0; index < 100; index++){
    console.log('-')
}
/** FIM DO CONTADOR */
console.timeEnd('tempo')
console.log('*****************************************************************')
console.assert(true, 'Assert is true')
console.assert(false, 'Assert is false')

console.clear()