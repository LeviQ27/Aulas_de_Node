function calculaSalario(salario) {
    return new Promise((resposta, error) => {
        setTimeout(() => {
            if (salario > 0) {
                resposta(salario - (salario * 0.15) - (salario * 0.11) - (salario * 0.05));
            } else {
                error();
            }
        }, 5000);

    });
}

async function mostraSalarioLiquido() {
    try {
        let resposta = await calculaSalario(10000)
        console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log(`Salário do profissional, após descontos de FGTS, INSS e Vale alimentação é de: R$ ${resposta.toFixed(2)}`);
        console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    } catch (error) {
        console.log('Digito inválido, tente novamente');
    }
}

mostraSalarioLiquido();