function Postagem(titulo, mensagem, autor) {
	this.titulo = titulo;
	this.mensagem = mensagem;
	this.autor = autor;
	this.vizualizacoes = 0;
	this.comentarios = [];
	this.estado = false;
}

let novaPostagem = new Postagem('a','b','c');
console.log(novaPostagem)