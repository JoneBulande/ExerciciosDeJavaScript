let faixadepreco = [
	{
		tooltip: 'Até 8000 Mzn',
		minimo: 0,
		maximo: 8000
	},
	{
		tooltip: 'De 8000Mzn a 10000Mzn',
		minimo: 8000,
		maximo: 10.000
	},
	{
		tooltip: 'De 10.000Mzn a 20.000Mzn',
		minimo: 10.000,
		maximo: 25.000
	}
]

//factory Function
function criarFaixa(tooltip, minimo, maximo) {
	return {
		tooltip,
		minimo,
		maximo
	}
}

let faixa2 =[
	criarFaixa('Até 8.000Mzn', 0, 8000),
	criarFaixa('De 8.000Mzn a 10.000Mzn', 10.000, 25.000),
	criarFaixa('De 10.000Mzn a 20.000Mzn', 10.000, 25.000),
]


//constructor function
function faixadepreco3(tooltip, minimo, maximo) {
	this.tooltip = tooltip;
	this.minimo = minimo;
	this.maximo = maximo;
}

let faixa3 = [
	new faixadepreco3('Até 8.000Mzn', 0, 8000),
	new faixadepreco3('De 8.000 até 10.000Mzn', 8000, 10000),
	new faixadepreco3('De 10.000 até 20.000Mzn', 10000, 20000)
]

console.log(faixadepreco)
console.log(faixa2)
console.log(faixa3)