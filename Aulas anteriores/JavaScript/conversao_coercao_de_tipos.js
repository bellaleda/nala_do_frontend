// js busca um acesso global (APIs), de onde ele puxa ou manda as infos (ex: html que é um doc), 
// js tem dois tipos de conversão (um tipo de variável para outro): explícita e implícita - lembrando que: o JS É SENSÍVEL PARA MAIÚSCULA E MINŚCULA, ELE DIFERENCIA!!!!!! LOGO, palavra é diferente de Palavra
// 1. explícita: manual 
const number = 10
console.log(number, typeof number) // typeof é para explicar qual o tipo da variável
const numberIsString = String (number) // independente da variável, converte para string
console.log(numberIsString, typeof numberIsString)

// no dracula theme texto é branco e número é amarelo 
console.log (Number('1989'))
console.log (parseFloat('1.68')) // A função parseFloat analisa um argumento (convertendo-o para uma string primeiro, caso necessário) e retorna um número de ponto flutuante (número decimal). |||parseFloat analisa um argumento string, e retorna um numero de ponto flutuante.
console.log (parseInt('1.68')) // converte para número inteiro
// no fim, recomenda-se utilizar a variável number
console.log (Boolean (0)) //0: sempre falso
console.log (Boolean (1989)) // diferente de 0: verdadeiro, qq número

console.clear()

// implícita: automática, js faz (de tipos). são muitos cenários, mas o ideal é utilizar de forma correta para evitar bugs

console.log(10+1)
console.log(10+'1') // ou '10' + 1 = 101, o js não soma,ele concatena, junta os textos - o js transforma o 10 em string
console.log(10-'1') // subtração "dá certo", js não entende como texto
console.log (10-'texto')// gera o NaN (not a number)

console.clear() 

// Exercícioss eba! usando o console para ver/mostrar o resultado do que estou fazendo
let n = 1 + "1" //quero uma variável que chama n | variável serve para quardar um valor, o valor inicial vai ser o resultado da operação 1+"1"="11" (type coersion), junta os textos

n = n - 1 // 11 - 1 =10 || = NÃO É EQUAÇÃO, É ATRIBUIÇÃO || js resolve o lado direito e depois atribui ao esquerdo, onde quero guardar || pega a string 11: "11" e transforma em número

console.log(n) // 10

console.log(2+3+4+'5') // '95' string

console.log("5"+2+3+4) // tudo transforma em string, então vai concatenar tudo: 5234
console.log('10'-'4'-'3'-2) // menos sempre vai ser número, então o js converte tudo em número
console.log('10'-'4'-'3'-2+'5') // no fim tem o mais então faz a operação=1 e concatena com o mais e vira "15"
console.log('5'-'2') //número 3