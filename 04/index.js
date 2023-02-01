const numeros = [0, 122, 4, 6, 7, 8, 44];

function numPares(numeros) {
    let invalido = false;

    for (const numero of numeros) {
        if (numero % 2 !== 0) {
            invalido = true;
        }
    }
    if (invalido) {
        console.log("array inválido");
    } else {
        console.log("array válido");
    }
}

numPares(numeros);