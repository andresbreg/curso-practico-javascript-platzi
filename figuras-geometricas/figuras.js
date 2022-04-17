// Cuadrado

console.group("Cuadrado");

// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden " + ladoCuadrado + " centímetros.");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
} 

// console.log("El perímetro del cuadrado mide " + perimetroCuadrado + " centímetros.");

function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}

// console.log("El área del cuadrado mide " + areaCuadrado + " centímetros cuadrados.");

console.groupEnd();

// Triángulo

console.group("Triángulo");

/*
const ladosTriangulo = 5;
const baseTriangulo = 8;
const alturaTriangulo = Math.sqrt((ladosTriangulo ** 2) - ((baseTriangulo/2) ** 2));

console.log("Los lados del triángulo miden " + ladosTriangulo + " centímetros.");
console.log("La base del triángulo mide " + baseTriangulo + " centímetros.");
console.log("La altura del triángulo mide " + alturaTriangulo + " centímetros.");
*/

function perimetroTriangulo(lado1, lado2, base) {
   return lado1 + lado2 + base;
}

// console.log("El perímetro del triángulo mide " + perimetroTriangulo + " centímetros.");

function areaTriangulo (baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
}

// console.log("El área del triángulo mide " + areaTriangulo + " centímetros cuadrados.");

console.groupEnd();

// Círculo

console.group("Círculo");

// const radioCirculo = 4;

function diametroCirculo(radio) {
 return radio * 2;
}

const pi = Math.PI;

function circunferencia(radio) {
    let diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio) {
    return pi * (radio ** 2);
}

/*
console.log("El radio del círculo mide " + radioCirculo + " centímetros.");
console.log("El diámetro del círculo mide " + diametroCirculo + " centímetros.");
console.log("La circunferencia del círculo mide " + circunferencia + " centímetros.");
console.log("El área del círculo mide " + areaCirculo + " centímetros cuadrados.");
*/

console.groupEnd();

function calcularPerimetroCuadrado() {
    let input = document.getElementById("lado-cuadrado");
    let value = input.value;
    let perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    let input = document.getElementById("lado-cuadrado");
    let value = input.value;
    let area = areaCuadrado(value);
    alert(area);
}