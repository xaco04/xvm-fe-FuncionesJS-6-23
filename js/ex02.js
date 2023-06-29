// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados
// por el usuario (prompt). Crea un método donde pasamos como parámetros entre entre
// qué números queremos que los genere, podemos pedirlas al usuario antes de generar
// los números. Este método devolverá un número entero aleatorio. Muestra estos
// números por consola

const generarNumeroAleatorio = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const minimo = parseInt(prompt("Ingrese el numero minimo del rango"));
const maximo = parseInt(prompt("Ingrese el nuero maximo del rango"));

const cantidad = parseInt(prompt("Ingrese la cantidad de numeros aleatorios a generar"));

console.log(`Numeros aleatorios generados entre ${minimo} y ${maximo}:`);
for (let i = 0; i < cantidad; i++) {
    const numeroAleatorio = generarNumeroAleatorio(minimo, maximo);
    console.log(numeroAleatorio);
}
