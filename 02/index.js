const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

function verificarPalavras(palavras) {
    let arrayValidado = true;
    for (const palavra of palavras) {
        if (palavra.length > 5) {
            console.log("existe palavra inválida");
            arrayValidado = false;
            break;
        }
    }
    if (arrayValidado) {
        console.log("array validado");
    }
}

verificarPalavras(palavras);