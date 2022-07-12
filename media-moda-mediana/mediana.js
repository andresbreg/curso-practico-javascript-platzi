// FORMA 1 - LISTA PREDEFINIDA

const lista1 = [
    100,
    200,
    500,
    700,
    800,
    400000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(cantidad) {
    if (cantidad % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];
    mediana = (elemento1 + elemento2) / 2;
} 
else {
    mediana = lista1[mitadLista1];
}

// FORMA 2 - FUNCIÓN

let lista2 = [4, 20, 2, 6, 1, 3, 10, 7];

let listaOrdenada = lista2.sort (
    function(a,b) {
    return a - b;
    }
);

console.log(listaOrdenada);

const mitadLista2 = parseInt(listaOrdenada.length / 2);

function esPar(cantidad) {
    if (cantidad % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let mediana2;

if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista2];
    const elemento2 = listaOrdenada[mitadLista2 - 1];
    mediana2 = (elemento1 + elemento2) / 2;
} 
else {
    mediana2 = listaOrdenada[mitadLista2];
}

console.log(`La mediana es ${mediana2}`);