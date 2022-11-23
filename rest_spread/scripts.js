// Spread
function somarElementos(a, b, c) {
	console.log(a + b + c);
}

let elementos = [1,5,14]; 

somarElementos(...elementos); // 20

let itensDaLista = ['trigo', 'batata'];

let listaDeCompras = ['banana', ...itensDaLista, 'arroz', 'maçã', 'chocolate'];

console.log(listaDeCompras); // (6) ["banana", "trigo", "batata", "arroz", "maçã", "chocolate"]
 
let arrA = [1,2,3];

let arrB = [4,5,6];

let arrC = [...arrA, ...arrB];

console.log(arrC); // (6) [1, 2, 3, 4, 5, 6]

// Rest
function testandoRest(a, b, ...theArgs) {
	console.log(a, b, theArgs); // 1, 2, [3,4,5]
}

testandoRest(1, 2, 3, 4, 5);

function testandoRest2(...theArgs) {
	console.log(theArgs); // [1,2,3,4,5]
}

testandoRest2(1, 2, 3, 4, 5);

function multiplicar(multiplicador, ...multiplicados) {
	return multiplicados.map(function(numero) {
		return multiplicador * numero;
	});
}

const multiplicados = multiplicar(3, 1,2,3,4,5);

console.log(multiplicados); // 3,6,9,12,15

function filtrarPares(...numeros) {
	return numeros.filter(function(numero) {
		return numero % 2 === 0;
	});
}

const pares = filtrarPares(1,2,3,4,5,6,7,8,9,10);

console.log(pares); // 2,4,6,8,10

function filtrarImpares(...numeros) {
	return numeros.filter((numero) => numero % 2 !== 0);
}

const impares = filtrarImpares(1,2,3,4,5,6,7,8,9,10);

console.log(impares);  // 1,3,5,7,9