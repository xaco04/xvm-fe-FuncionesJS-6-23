// Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizará mediante un método al que le pasamos el número como parámetro. Para
// calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo,
// si introducimos un 5, realizará esta operación 5*4*3*2*1=120.

const calcularfactorial = (newnumero) => {
    let factorial= 1;
    for (let i = 1; i <= newnumero; i++) {
        factorial *= i;
    }
    return factorial;
}

let numero = prompt("Ingrese un numero ");
let factorial = calcularfactorial(numero);
console.log(`El factorial de ${numero} es ${factorial}`)
