// Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos estará
// rellenado con números aleatorios y el otro apuntará al array anterior, reasigna los valores
// del segundo array con valores aleatorios. Después, crea un método que tenga como
// parámetros, los dos arrays y devuelva uno nuevo con la multiplicación de la posición 0
// del array1 con el del array2 y así sucesivamente. Por último, muestra el contenido de
// cada array.

const dimension = parseInt(prompt("Ingrese la dimensión de los arrays:"));

const array1 = [];
for (let i = 0; i < dimension; i++) {
    array1.push(Math.floor(Math.random() * 10) + 1);
}

const array2 = [...array1];
for (let i = 0; i < dimension; i++) {
    array2[i] = Math.floor(Math.random() * 10) + 1;
}

const multiplicarArrays = (arr1, arr2) => {
    const resultado = [];
    for (let i = 0; i < dimension; i++) {
        resultado.push(arr1[i] * arr2[i]);
    }
    return resultado;
};

const arrayResultado = multiplicarArrays(array1, array2);

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array Resultado:", arrayResultado);
