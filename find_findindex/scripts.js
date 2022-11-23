// find()
const nomes = ['Maria', 'Pedro', 'João', 'Alberto'];

console.log(nomes.find((nome) => nome == 'Pedro')); // 'Pedro'

function numeroPar(num) {
	if(num % 2 === 0) {
		return num;
	}
}

const numeros = [1,3,5,6,9,12];

console.log(numeros.find(numeroPar)); // 6

const numeros2 = [1,3,5,7,9];

console.log(numeros2.find(numeroPar)); // 6

// findIndex()

const itens = ['Per', 'Maçã', 'Banana', 'Melão'];

console.log(itens.findIndex((item) => item == 'Banana')); // 2

const idades = [12,15,13,14,22];

function maiorDeIdade(idade) {
	if(idade >= 18) {
		return idade;
	}
}

console.log(idades.findIndex(maiorDeIdade)); // 4

const idades2 = [12,15,13,14,10];

console.log(idades2.findIndex(maiorDeIdade)); // -1