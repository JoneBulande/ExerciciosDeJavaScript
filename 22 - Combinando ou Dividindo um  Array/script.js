const numeros1 = [1,2,3]
const numeros2 = [4,5,6]

//combinar
const numeros3 = [...numeros1, ...numeros2];
const combinado = numeros1.concat(numeros2)


//dividir
const cortando = combinado.slice();
console.log(cortando)