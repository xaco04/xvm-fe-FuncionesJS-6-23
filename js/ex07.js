// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a
// EJERCICIOS JS - Funciones
// otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €

const convertirMoneda = (cantidadEuros, monedaDestino) => {
    let cambio;
    let mensajeMoneda;

    switch (monedaDestino) {
        case "libras":
            cambio = 0.86;
            mensajeMoneda = "libras";
            break;
        case "dólares":
            cambio = 1.28611;
            mensajeMoneda = "dólares";
            break;
        case "yenes":
            cambio = 129.852;
            mensajeMoneda = "yenes";
            break;
        default:
            console.log("Moneda no válida");
            return;
    }

    const cantidadConvertida = cantidadEuros * cambio;
    console.log(`${cantidadEuros} euros son ${cantidadConvertida} ${mensajeMoneda}`);
};

const euros = parseFloat(prompt("Introduce la cantidad de euros"));
const monedaDestino = prompt("Introduce la moneda libras, dólares o yenes");

convertirMoneda(euros, monedaDestino);
