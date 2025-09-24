function sumar(numero1, numero2){

    return numero1 + numero2;

}

function restar(numero1, numero2){

    return numero1 - numero2;

}
function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}
function pi() {
    return Math.PI;
}

function modulo(numero1, numero2) {
    if (numero2 === 0) {
        throw new Error("No se puede calcular el módulo con divisor cero");
    }
    return numero1 % numero2;
}



















