// EXTRAER SALARIOS

const salariosCol = colombia.map (
    function (persona) {
        return persona.salary; 
    }
);

// ORDENAR SALARIOS

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

// FUNCIÓN HELPER

function esPar (numero) {
    return numero % 2 === 0;
}

// CALCULADORA DE MEDIANAS

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personaA = lista[mitad];
        const personaB = lista[mitad - 1];
        const promedio = (personaA + personaB) / 2;
        return promedio;
    }
    else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);
console.log(medianaGeneralCol);

// MEDIANA TOP 10

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaColTop10 = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaColTop10,
});