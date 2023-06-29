// . Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos
// por parámetro para que nos indique si es o no un número primo, debe devolver true si
// es primo sino false. Un número primo es aquel que solo puede dividirse entre 1 y sí
// mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si
// es primo.


const esPrimo = (numero) => {
    if (numero <= 1) {
        return false;
    }

// per calculara l'arrel cuadrada Math.sqrt(numero)
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i == 0) {
            return false;
            }
        }

    return true;
};

const numero = (prompt("Ingrese un numero"));

if (esPrimo(numero)) {
    console.log(`${numero} es un numero primo`);
} 
else {
    console.log(`${numero} no es un numero primo`);
}
