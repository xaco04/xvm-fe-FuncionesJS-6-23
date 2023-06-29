// 10. Crea un array de números de un tamaño pasado por prompt, el array contendrá números
// aleatorios primos entre los números deseados, por último, nos indica cuál es el mayor
// de todos. Haz un método para comprobar que el número aleatorio es primo, puedes
// hacer todos los métodos que necesites.

const esPrimo = (numero) => {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
    }
    }

    return true;
};

const tamañoArray = parseInt(prompt("Ingrese el tamaño del array"));

const arrayPrimos = [];
let contador = 0;

while (arrayPrimos.length < tamañoArray) {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    if (esPrimo(numeroAleatorio)) {
        arrayPrimos.push(numeroAleatorio);
    }

    contador++;
}

console.log("Array de números primos:", arrayPrimos);

const mayor = Math.max(...arrayPrimos);

console.log("El mayor número primo es:", mayor);
