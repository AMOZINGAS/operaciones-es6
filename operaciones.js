function sumar(numero1, numero2){

    return numero1 + numero2;

}

function restar(numero1, numero2){

    return numero1 - numero2;

}

function multiplicar(numero1, numero2){

    return numero1 * numero2;

}

function dividir(numero1, numero2){

    if(numero2 == 0) "No se puede dividir entre 0";

    return numero1/numero2;

}

function modulo(numero1, numero2){

     if(numero2 == 0) "No se puede calcular el modulo con divisor 0";

    return numero1%numero2;

}

const pi = Math.pi;

module.exports = {

    sumar,
    restar,
    dividir,
    multiplicar,
    modulo,
    pi

};

