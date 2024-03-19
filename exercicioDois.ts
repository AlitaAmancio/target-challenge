// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;



import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(answer: string) {
    let value = Number(answer);
    if (!isNaN(value)) {
        if (fibonacci(value)) {
            console.log(`O número ${answer} consta na sequencia de Fibonacci!`)
        }
        else {
            console.log(`O número ${answer} não consta na sequencia de Fibonacci.`)
        }

        rl.close();
    }
    else {
        rl.question(`"${answer}" não é um número. Por favor, insira um número: `, perguntar);
    }
}

rl.question('Insira um número, vou verificar se ele pertence a sequência de Fibonacci: ', perguntar);

function fibonacci(answer: number) {
    let penultimo = 0;
    let ultimo = 1;

    while (ultimo < answer) {
        let proximo = ultimo + penultimo;
        penultimo = ultimo;
        ultimo = proximo;
    }

    return answer == ultimo
}
