// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

// Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?



//O problema depende de algumas variáveis, vamos considerar que neste caso os interruptores estão paralelos um ao outro para que possamos reconhecer e diferenciar suas posições, vamos considerar também que as lâmpadas esquentam. Primeiramente ligamos apenas o interruptor 1 e aguardamos, no intuito de que a lâmpada correspondente esquente, em seguida ligamos o interruptor 2 e vamos até a primeira sala. A lâmpada que estiver acesa e quente pertence ao interruptor 1. A que estiver acesa, mas ainda fria, corresponde ao interruptor 2. A lâmpada que resta, a apagada, corresponde então ao interruptor 3.

