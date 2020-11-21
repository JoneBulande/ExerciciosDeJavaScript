const numeros = [1,2,3];
//console.log(numeros);


// Adiciona valor no inicio do Array
numeros.unshift(0);
console.log(numeros)

// Adiciona valor no Meio do Array
numeros.splice(Math.floor(numeros.length/2),0,'num');
console.log(numeros)

// Adiciona valor no fim do Array
numeros.push(4);
console.log(numeros);

