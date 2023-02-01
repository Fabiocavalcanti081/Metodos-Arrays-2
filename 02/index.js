const palavras = ["livro", "caneta", "sol", "carro", "orelha"];
const palavraMaiorOito = palavras.some((palavras) => {
    return palavras.length > 5;
});

if (palavraMaiorOito) {
    console.log("existe palavra inválida");
} else {
    console.log("array validado");
}