function multiplos(limite) {
	let multiplosDe3 = 0;
	let multiplosDe5 = 0;	
	for (var i = 0; i <= limite; i++) {
		if (i % 3 === 0) {
			multiplosDe3 += i;
		}
		
	}
	for (var i = 0; i <= limite; i++) {
		if (i % 5 === 0 && i > 0) {
			multiplosDe5 += i;
		}
	}
	console.log(`As Soma dos múltiplos de 3 e 5 até ${limite} é: ${multiplosDe3+multiplosDe5}`);
}
multiplos(10);
