// arrays são um tipo de estrutura de dados e permite guardar várias infos
// const tal: uma variável para cada tipo de info

let arr = ['Isabella', 26, 1.68, true]
console.log(arr) // todos os elementos

console.log('first:', arr[0])
console.log('2nd:', arr[1])
console.log('3rd:', arr[2])
console.log('4th:', arr[3])

//tamanho do array?, quantos elementos no interior

console.log('quantos elementos?', arr.length)

console.clear()

// FOR para percorrer (imprimir, passar por cada um dos elementos) arrays no js
// 1º 

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

console.clear()

// 2º: for of - cada interação pega 1 elemento da estrutura
for(let elemento of arr){
    console.log(elemento)
}

console.clear()

// 3º: for in - percorre os índices

for(let índice in arr){
    console.log(índice, arr[índice])
}

console.clear()

// Função = método - estudar pela documentação mdn

const arr1 = [30,12,45,34,29]
let arr2 = []

// Fatiamento : slice - indice de início e de final (o segundo parâmetro é exclusivo, então busca o elemento em posição menor que ele, então se é 1, só pega o início, se for 2, )

console.log(arr1.slice(0, 2))
console.log(arr1.slice(2)) // 1 parâmetro, pega o início e vai até o final
console.clear()

// Adicionar: push|unshift 1 item ou vários itens 
console.log('antes:', arr2)

arr2.push(10,20,30)
arr2.push(40) // sempre adiciona depois

console.log('depois:', arr2)

console.log('sem unshift:', arr2)
arr2.unshift(0) // unshift adiciona antes
console.log('com unshift:', arr2)

console.clear()

// Remover: pop | shift

console.log('sem pop:', arr2)

const removido = arr2.pop()  // elimina o último elemento 

console.log('com pop:', arr2)
console.log('removido:', removido)

console.log('sem shift', arr2)
arr2.shift() // remove o primeiro elemento
console.log('com shift', arr2)

console.clear()

// Concatenação

console.log('arr1', arr2)
console.log('arr2', arr1)

console.log(arr1.concat(arr2)) // leva a ordem escrita em consideração, comça pelo primeiro que pus e junta com o segundo

console.clear()

// Buscar elemento: indexOf | lastIndexOf
console.log(arr1)
let indiceDo34 = arr1.indexOf(34)

console.log(indiceDo34) // se buscar um elemento inexistente, o resultado será -1 | se tiver 2 iguais, retorna o índice do primeiro

let arr3 = [1,2,3,3,5,3]

console.log(arr3.lastIndexOf(3)) // imprime o último 3 do array

console.clear()

// Elemento existe?

console.log(arr1)
console.log(arr1.includes(10)) // v ou f

console.clear()

// Inverter array

console.log('arr1 normal:', arr1)
const invertido = arr1.reverse()
console.log('arr1 invertido', invertido)
