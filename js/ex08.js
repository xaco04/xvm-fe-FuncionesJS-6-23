// 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar
// valores y otro para mostrar.

const rellenarArray = () => {
    const array = [];

    for (let i = 0; i < 10; i++) {
        const valor = parseFloat(prompt(`Ingrese el valor para la posición ${i}`));
        array.push(valor);
    }
    return array;
};

const mostrarArray = (array) => {
    array.forEach((valor, indice) => {
        console.log(`Índice ${indice}: ${valor}`);
    });
};

const miArray = rellenarArray();

mostrarArray(miArray);
