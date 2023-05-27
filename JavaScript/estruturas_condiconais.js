// estrutura de controle de fluxo, nem toda linha de código será executada, mas apenas quando satisfizer determinada condição
const idade = 26;

// o que estiver dentro da chave/bloco, vai ser executado conforme o if
if (idade >= 18) {
  console.log("canDrive");
} else {
  console.log("underAge");
}

console.clear()

let media = 6.9999

if(media >=7){
    console.log('aprovado')
} else if (media >= 5) {
    console.log('recu')
} else {
    console.log('reprovado')
}

var x
console.log(x) // undefined

// var x = 10;
// console.log(x + y);
// let y = 15; 
// será exibido um erro, pois variáveis declaradas com let não sofrem elevação de escopo(hoisting).