// exemplos var
var nome = 'João';

console.log('Meu nome é: ', nome); // Meu nome é:  João

function sayMyName() {
	var nome = 'Pedro';
	console.log('Meu nome é :', nome); // Meu nome é : Pedro
}

sayMyName();

console.log(nome); // João

if(true) {
	var nome = 'Kléber';
	console.log('Meu nome é: ', nome); // Meu nome é:  Kléber
}

console.log('Meu nome é: ', nome); // Meu nome é:  Kléber

for(var i = 0; i < 3; i++) {
	var nome = 'Vitor';
	console.log('Meu nome é: ', nome ); // Meu nome é:  Vitor
}

console.log('Meu nome é: ', nome ); // Meu nome é:  Vitor

console.log('-- iniciando let --');

// exemplos let
let meuNome = 'João';

console.log('Meu nome é: ', meuNome); // Meu nome é:  João

function sayMyName() {
	let meuNome = 'Pedro';
	console.log('Meu nome é :', meuNome); // Meu nome é : Pedro
}

sayMyName();

console.log(meuNome); // João

if(true) {
	let meuNome = 'Kléber';
	console.log('Meu nome é: ', meuNome); // Meu nome é:  Kléber
}

console.log('Meu nome é: ', meuNome); // Meu nome é:  João

for(i = 0; i < 3; i++) {
	let meuNome = 'Vitor';
	console.log('Meu nome é: ', meuNome ); // Meu nome é:  Vitor
}

console.log('Meu nome é: ', meuNome ); // Meu nome é:  João

let j = 0;

for(let j = 10; j > 0; j--) {
	console.log('j agora é :' + j);
}

// const teste;
// var teste;

const teste = 1;

if(true) {
	const teste = 2;
	console.log(teste);
}

console.log(teste);