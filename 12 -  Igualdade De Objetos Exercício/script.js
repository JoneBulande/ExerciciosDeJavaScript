function mostrarObjetoEndereco(dados) {
	for(let valor in dados) {
		console.log(valor, dados[valor]);
	}	
}
const dados = {
	nome: 'Ana',
	idade: 18,
	nacionalidade: 'Moçambicana'
}
mostrarObjetoEndereco(dados);