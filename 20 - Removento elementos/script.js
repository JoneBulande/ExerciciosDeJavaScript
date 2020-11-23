const numeros = [1, 2, 3, 4, 5];
console.log(numeros)

//remover elemento no Início do Array
const primeiro = numeros.shift()
console.log('Primeiro:', primeiro)

//remover elemento no Meio do Array
const meio = numeros.splice(1,1)
console.log('Meio:', meio)

//remover elemento no Final do Array
const ultimo = numeros.pop()
console.log('Último:', ultimo, )

console.log(numeros)