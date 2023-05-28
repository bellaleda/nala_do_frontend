// define quantas vezes quero que a estrutura aconteça FOR
const input = require('readline-sync')

// const nota1 = Number (input.question('informe a nota1:'))
// const nota2 = Number (input.question('informe a nota2:'))
// const nota3 = Number (input.question('informe a nota3:'))

// let media = (nota1 + nota2 + nota3) / 3

// Acumulador 
let acumulador = 0;
acumulador = acumulador + 10 // ou acumulador += 10
acumulador += 2
acumulador ++ // somando uma unidade à variável: soma 1

console.log(acumulador)

console.clear()

// FOR: laço é estrutura, volta é interação
// for: quando começa e quando termina
// i++: soma uma unidade a cada volta, evita o loop infinito

for (let i = 0; i <= 4; i++){
    console.log('repetição', i) // mostra o valor da variável na repetição
}

for (let i = 12; i > 8; i--){
    console.log('repetição', i) 
}

console.clear()

// crase + espaço para por variável dentro de uma string
let nota;
let soma = 0

for (let i = 1; i <= 3; i++){
    nota = Number(input.question(`qual a nota ${i} do aluno:`))
    soma = soma + nota
}

console.log(`media é ${soma/3}`)
