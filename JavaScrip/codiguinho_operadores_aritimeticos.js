// pode por números no meio da variável, mas NUNCA no início
// sempre usar minúsclas para começar a variavel
// NÃO ACEITA composto, se tem 2 palavras, se entende enquanto 2 coisas - se utiliza camel case: primeiraSegundaTerceira
let primeiroNumber = 20
let segundoNumber = 2

const soma = primeiroNumber + segundoNumber
// string vírgula outras variáveis que imprimem o resultado
console.log('soma =', primeiroNumber + segundoNumber) // ou  "soma =", soma (referencia à const)

console.log("subtração =", primeiroNumber - segundoNumber)
console.log("multiplição =", primeiroNumber * segundoNumber)
console.log("divisão =", primeiroNumber / segundoNumber) 
console.log("exponenciação =", primeiroNumber ** segundoNumber) 
console.log("resto da divisão =", primeiroNumber % segundoNumber) 

// precedência de operadores: ordem aritmética de cálculo! radiciação e exponenciação DEPOIS multiplicação e divisão e POR ÚLTIMO soma e subtração !!!! clg autocomplete = console.log()

console.log(3+7*3)
console.log((10+7+8)*9)

// biblioteca math: natva do js
console.log(Math.PI)
console.log(Math.sqrt(16))
