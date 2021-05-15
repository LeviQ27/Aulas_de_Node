/** Promises */



/** Função Assyncrona */
function calc(valor) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(5 * valor)
        }, 2000);
    })

}


calc(20)
/** Passe por aqui caso tudo ocorra bem */
.then((retorno)=>{
    console.log(`Valor de retorno: ${retorno}`)
})
/** Passe por aqui caso dê algum problema */
.catch((error)=>{
    console.log(`Valor de ERROR: ${error}`)
})