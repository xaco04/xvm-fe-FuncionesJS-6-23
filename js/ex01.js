// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá
// los valores necesarios para calcular el área. Para ello has de crear un método por cada
// figura para calcular cada área, este devolverá un número real. Muestra el resultado por
// consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado



const areatriangulo = (base, altura) => {
    let area = (base * altura) / 2;
    return area;
}

const areacuadrado = (lado) => {
    let area = lado * lado;
    return area;
}

const areacirculo = (radio) => {
    const area = Math.PI * Math.pow(radio, 2);
    return area;
}

const calcularArea = (figura) => {
    let area;

    switch (figura) {
        case "triangulo":
            let basetriangulo = prompt("Ingrese la base:");
            let alturatriangulo = prompt("Ingrese la altura:");
            area = areatriangulo(basetriangulo, alturatriangulo);
            break;
        case "cuadrado":
            let ladocuadrado = prompt("Ingrese el lado del cuadrado:");
            area = areacuadrado(ladocuadrado);
            break;
        case "circulo":
            let radio = prompt("Ingrese el radio del círculo:");
            area = areacirculo(radio);
            break;
        default:
            console.log("No es ninguna de las figuras válidas.");
            return;
    }
    console.log(`El área de la figura ${figura} es: ${area}`);
}

const figura = prompt("Ingrese una figura (triangulo, cuadrado o circulo):");
calcularArea(figura);

