// camel case é o nome desginado para quando eu crio uma variável;
let nome = 'Júlio César';
let idade = 18;
let vivo = false;

// let saida1 = 'Olá, ' + nome + '! Tudo bem com você?';     // Crases e Acentos
saida1 = `Olá, ${nome}! Você tem ${idade} anos!`;


console.log(saida1);
// alert('Hello Word');
// console.log('Passou de Alert');

idade = prompt('Quantos anos você tem?'); // console.log(prompt('Qual seu nome?'));
console.log(`Você tem ${idade}`);
vivo = confirm('Você está vivo?');
console.log(`Você está vivo? ${vivo}`);




// RECEBA DOIS VALORES NUMÉRICOS DO USUÁRIO E RETORNE UM ALERT COM O RESULTADO COM A SOMA



valor1 = prompt('Digite um número:');
valor2 = prompt('Digite mais um número:');

// resultado = Number(valor1) + Number(valor2);
alert (`O resultado da soma é ${Number(valor1) + Number(valor2)}`);






