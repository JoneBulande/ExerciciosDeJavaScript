const notas = [70, 70, 80];

function media(notas) {
	const media = calcularMedia(notas);
	if (media < 59) return 'nota F';	
	if (media < 69) return 'nota D';	
	if (media < 79) return 'nota C';	
	if (media < 89) return 'nota B';
	return 'nota A';	
}

function calcularMedia(notas) {
	let soma = 0;
	for(valor of notas){
		soma += valor;
	}	
	return soma/notas.length;
}
console.log(media(notas))