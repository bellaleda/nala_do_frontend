console.log('nala do frontend')
console.log('codiguinhos em js')
// variáveis: pedaços de memória que reserva para guardar determinada info - "etiquetas" que nominam, identificam o conteúdo -> se refencia o conteúdo pelo nome da variável
// no JS quando se quer CRIAR uma variável, não se diz qual o tipo dela (se usa o let para criar) para atribuir um conteúdo, se põe "=" / para imprimir o conteúdo, se põe "console.log" e põe o conteúdo entre () 
//SÓ PODE CRIAR UM TIPO DE LET (DE VARÍAVEL)
let idade = 26; // primeira variável

console.log(idade)

// tipos de variáveis: número inteiro; número float

idade = 30 // alterar varíavel (let it change): basta atribuir um novo valor, texto (quando for text, tem de por as aspas seja ' ou "" string aparece em branco no terminal, número em amarelo, tipo boleano/boolean (varável de true or false)
let number = 30   // number
let altura = 1.68 // number, independente de ser float, js entende igual
let nome = 'Isabella' // texto=string
let codando = true // boleano

// vírgla: quero imprimir o que está antes e ouyta coisa tbm
console.log(number, typeof number)
console.log(altura, typeof altura)
console.log(nome, typeof nome)
console.log(codando, typeof codando)

let outra; // sem valor ou let outra(undefined)
console.log(outra) // como não tem valor, será undefined

let nula = null
console.log(nula)

// var é sintaxe antiga (antes de 2015), hoje se usa apenas let
var variavel = 30

const constante = 100 // const é FIXA, INVARIÁVEL, deve ter um ÚNICO VALOR, não pode variar
 
// limpar o terminal: clear