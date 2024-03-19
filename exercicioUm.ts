// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;
// enquanto K < INDICE faça
// {
// K = K + 1;
// SOMA = SOMA + K;
// }
// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?



let indice: number = 13;
let soma: number = 0;
let k: number = 0;

while (k < indice) {
    k = k + 1;
    soma = soma + k;
    console.log(`O valor atual da váriável é: ${soma}.`);
}
console.log(`O valor final da variável é: ${soma}.`);

// Ao final do processamento o valor da variável SOMA será 91
