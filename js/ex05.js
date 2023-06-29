// 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un
// String con el número convertido a binario. Para convertir un número decimal a binario,
// debemos dividir entre 2 el número y el resultado de esa división se divide entre 2 de
// nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división
// formará el número binario, de abajo a arriba.

// Función para convertir un número decimal a binario
const decimalToBinary = (numero) => {
    let binario = "";
    while (numero > 0) {
        binario = (numero % 2) + binario;
        numero = Math.floor(numero / 2);
    }
    return binario;
};

const numeroDecimal = parseInt(prompt("Ingrese un número decimal"));
const numeroBinario = decimalToBinary(numeroDecimal);
console.log(`El número ${numeroDecimal} en binario es ${numeroBinario}`);
