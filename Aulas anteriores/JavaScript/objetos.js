// objeto: guarda vários conteúdos dentro de uma variável e acessa o elemento por uma chave a ser definida (um valor), não por índice, como array

let pessoa = {
    "nome": 'Isabella',
    "idade": 26,
}

console.log(pessoa)

// para acessar o nome
console.log(pessoa.nome) // chave simples não precis de string
console.log(pessoa.idade)
console.log(pessoa['nome']) // para chave com nome composto

// adicionar par chae-valor 

pessoa.altura=1.68
console.log(pessoa)

// remover chave de objeto
delete pessoa.altura
console.log(pessoa)

console.clear()

// como percorrer? com as chaves, se acha o valor dos objetos

for(let chave in pessoa){
    console.log(chave)
}
