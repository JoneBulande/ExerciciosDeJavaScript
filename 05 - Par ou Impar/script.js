function parOuImpar(valor) {
	if (typeof valor === 'number') {
		if (Number.isInteger(valor/2)) {
			console.log(`${valor} é Par`)
			} else {
				console.log(`${valor} é Impar`)	
			}
	}
	
	if (Array.isArray(valor)) {
		valor.forEach((n) => {
			if (Number.isInteger(n/2)) {
			console.log(`${n} é Par`)
			} else {
				console.log(`${n} é Impar`)	
			}
		})
	} 
}
const numeros = [3,4,543,123, 32, 1, 41, 10];
parOuImpar(2)
parOuImpar(numeros)
