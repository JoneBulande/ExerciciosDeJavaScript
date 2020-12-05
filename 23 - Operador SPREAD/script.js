const numeros1 = [1,2,3]
const numeros2 = [4,5,6]

//combinar
const combinado = [...numeros1, 'yeah', ...numeros2];
console.log(combinado)

// clonar
const cortando = combinado.slice();
const clonado = [...combinado];

console.log(clonado)
