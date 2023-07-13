// Estruturas de repetição ou laços condicionais, enquanto for verdadeira, ela se repete, quando deixar de ser, encerra o código WHILE || Math random || para instalar novas bibliotecas, npm install "nome da biblioteca" (readline-sync)
const input = require('readline-sync')

const numeroSorteado = 5

let numero = Number(input.question('meuNumero:')) // input sempre lê como texto, string
console.log(numero, typeof numero)

// if(numero === numeroSorteado){
//     console.log('ganhou na mega')
// } else {
//     console.log('segue pobre')
// }

while (numero !== numeroSorteado){
    console.log('faça outra fézinha')
    // para parar: ctrl + c no terminal
    numero = Number(input.question('meuNumero:'))
} 
console.log('ganhou na mega')

