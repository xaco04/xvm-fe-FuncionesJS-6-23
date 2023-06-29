// . Crea un array de números de un tamaño pasado por prompt, el array contendránúmeros
// aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un dígito que
// nosotros le indiquemos por prompt (debes controlar que se introduce un número
// correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un array de 10
// posiciones le indicamos mostrar los números acabados en 5, podría salir 155, 25, etc.

const tamañoArray = parseInt(prompt("Ingrese el tamaño del array:"));

const array = [];
for (let i = 0; i < tamañoArray; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 300) + 1;
    array.push(numeroAleatorio);
}

let digito = parseInt(prompt("Ingrese el dígito específico (0-9):"));

while (isNaN(digito) || digito < 0 || digito > 9) {
    digito = parseInt(prompt("Ingrese un dígito válido (0-9):"));
}

const numerosFiltrados = array.filter(numero => numero % 10 === digito);

console.log("Números que terminan en", digito + ":");
console.log(numerosFiltrados);
