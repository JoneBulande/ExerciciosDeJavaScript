function exibirPropriedade(objeto) {
	for (let n in anime) {
		if (typeof anime[n] === 'string') {
			console.log(`${n}: ${anime[n]}`);
		}
	}
}
const anime = {
	nome: 'Naruto',
	ano: 2002,
	txi: 12,
	nice: true,
	vilao: 'Pain',
}
exibirPropriedade(anime);