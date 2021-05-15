/** ASYNC E AWAIT */



/** Função Assyncrona */
function calc(valor) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5 * valor)
        }, 2000);
    })

}




async function main(){
    try{
        let retorno = await calc(20)
        console.log(`Valor de SUCESSO: ${retorno}`)
    }catch(error){
        console.log(`Valor invalido`)
    }
    
}

main()