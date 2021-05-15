function calculaSalario(salario, callback){
    return setTimeout(() => {
        return callback(null, salario - (salario * 0.15) - (salario * 0.11) - (salario * 0.05));
    }, 5000);
}

function mostraSalarioLiquido(err, resposta){
    if(err) throw err;
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    console.log(`Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$ ${resposta.toFixed(2)}`);
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
}

calculaSalario(10000, mostraSalarioLiquido);