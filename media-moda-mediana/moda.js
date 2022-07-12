const lista = [1,2,3,1,2,3,4,2,2,2,1];

const listaCount = {}; // Objeto Vacío

lista.map (
    function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        }
        else {
            listaCount[elemento] = 1;
        }
    }
);

// Object.entries convierte los elementos de un Objeto en un Array

const listaArray = Object.entries(listaCount).sort (
    function (a, b) {
    return a[1] - b[1];    
    }
); 

const moda = listaArray[listaArray.length - 1];