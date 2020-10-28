const postagem = {
		titulo: "yeah",
		mensagem: "a",
		outor: "Ana",
		visualizações: 2157,
		comentarios: [
			{autor: 'a', mensagem: 'b'},
			{autor: 'c', mensagem: 'd'}
		],
		estaAoVivo: true

	}
for(let post in postagem) {
	console.log(post)
}