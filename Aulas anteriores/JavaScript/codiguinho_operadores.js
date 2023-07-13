// 1. arithmetic operators
// pode por números no meio da variável, mas NUNCA no início
// sempre usar minúsclas para começar a variavel
// NÃO ACEITA composto, se tem 2 palavras, se entende enquanto 2 coisas - se utiliza camel case: primeiraSegundaTerceira
let primeiroNumber = 20
let segundoNumber = 2

const soma = primeiroNumber + segundoNumber
// string vírgula outras variáveis que imprimem o resultado
console.log('soma =', primeiroNumber + segundoNumber) // ou "soma =", soma (referencia à const)

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
console.log(Math.sqrt(16)) // raiz quadrada(square root)
// Math.ceil: arredonda para cima

// 2. boolean operators: o resultado/retorno será true or false, são comparações
// igualdade (== ou ===), desigualdade (!= ou !==), maior, maior ou igual, menor, menor ou igual
const number = 10 // =: atribuição

console.log(number > 20)
console.log(number == 10) // ==:comparar
console.log(number == '10') // 10 é texto/string
console.log(10 == '10') // const number = 10 -> ='10'; com == o js só compara o conteúdo 
console.log(number === '10') // ===: js compara conteúdo E tipo, logo, utilizar sempre TRÊS IGUAIS para evitar bugs

console.clear() // limpa tudo o que foi impresso acima

console.log(number != 10)
console.log(number != "10")
console.log(number !== "10") // deve ser feito assim

//conjunções lógicas
// and (&&) : condições para um resultado

let idade = 26
let cnh = true
const candrive = idade >= 18 && cnh === true // conf boolean de juntar as condições

console.log('can I drive?', candrive) // satisfazer as condições

// ou (||)

idade = 40
const voteNotMandatory = idade < 18 || idade >= 70

// not (!): inverte

const loveLucas = false
console.log(!loveLucas)