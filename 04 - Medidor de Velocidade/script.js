function verificarVelocidade(v) {
	
	const limite = 70,
				quilometrosPorPonto = 5,
				valocidade = Math.floor(v);	
	
	if (valocidade <= limite) {
		console.log(`Sua valocidade foi de ${valocidade}km/h Prossiga!`);
	} else {
		
		const pontos = Math.floor((valocidade - limite )/quilometrosPorPonto);

		if (pontos > 12 ) {
			console.log(`Sua valocidade foi de ${valocidade}km/h passou do limite de ${limite}km/h com ${pontos} de pontos a usa carteira foi suspensa!`)
		}	else {
			console.log(`Sua valocidade foi de ${valocidade}km/h passou do limite de ${limite}km/h, Pare! foste multado com pontos: ${pontos}`)
		}
	}
}
verificarVelocidade(20)