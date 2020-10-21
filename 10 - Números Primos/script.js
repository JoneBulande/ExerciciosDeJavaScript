function mostrarNumerosPrimos(limite) {
	for (let numero = 2; numero < limite; numero++) {
		if (numeroPrimo(numero)) console.log(numero)
	}
}

function numeroPrimo(numero) {
	for (let divisor = 2; divisor < numero; divisor++) {
		if (numero % 2 === 0) {
			return false
		}
	}
	return true;
}
mostrarNumerosPrimos(10)