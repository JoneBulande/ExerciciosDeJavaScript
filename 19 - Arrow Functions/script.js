const pessoas = [
	{nome: 'Ana', idade: 18},
	{nome: 'Antonio', idade: 20}
];

const pessoa = pessoas.find( (p) => p.nome === 'Ana' );
console.log(pessoa)