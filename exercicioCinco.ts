// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;



import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverter(answer: string) {
    let invertida = '';
    for (let i = answer.length; i > 0; i--) {
        invertida += answer[i - 1];
    }
    console.log(`A string invertida será: ${invertida}`);
    rl.close();
}

rl.question('Insira uma string, vou invertê-la: ', reverter);