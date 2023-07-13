// Função: trecho do código que dá para reaproveitar várias vezes 
// 1º: define | 2º: chama pelo nome para se referir

function saudacao() {
    console.log('oiii, esse é o nalaverso (:')
}

saudacao()

console.clear()

// como enviar parâmetros para as funções | se põe um igual, define um parâmetro default; posso mudar caso eu atribua um parâmetro após

function saudacao(nome, curso='JavaScrpt') {
    console.log(`oiii, ${nome} , esse é o nalaverso de ${curso} (: !!!`)
}

saudacao('Isabella') // se não passar o parametro, o js entende enquanto undefined

// retorno da função 

function soma(number1, number2){
    // console.log('soma=', number1 + number2), não é uma boa prática pq o clg é fixo 
    return number1 + number2 // o retorno encerra a função!
}

const result = soma(10,20)

console.log(result/2) // retornar valores da função

console.clear()

function maiorque50(number){
    if (number > 50){
        return true
    }
    return false
}

let resposta = maiorque50(22)

console.log(resposta)

// estudar arrow function: função anônima
