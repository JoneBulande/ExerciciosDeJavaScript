const resultado = fizzBuzz(15);
function fizzBuzz(valor) {
	if (typeof valor !== 'number')
		return 'Não é um Número!'
	if (valor % 3 === 0 && valor % 5 === 0)
		return 'FizzBuzz!'
	if (valor % 3 === 0)
		return 'Fizz!'
	if (valor % 5 === 0){
		return 'Buzz!'
	}
	return valor;
}
console.log(resultado);