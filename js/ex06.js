// Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// pasando el número por parámetro devolverá el número de cifras.


const contarCifras = (numero) => {
    if (numero < 0 || !Number.isInteger(numero)) {
        return "El número debe ser un entero positivo";
    }

    const cifras = String(numero).length;

    return cifras;
};
const numeroEntero = parseInt(prompt("Ingrese un número entero positivo"));
const numeroCifras = contarCifras(numeroEntero);
console.log(`El numero ${numeroEntero} tiene ${numeroCifras} cifras`);







