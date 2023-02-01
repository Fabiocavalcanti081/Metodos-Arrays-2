const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];
const bebidasProibidas = palavras.some((palavras) => {
    return palavras === "cerveja" || palavras === "vodka";
});

if (bebidasProibidas) {
    console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
    console.log("tudo certo, vamos as compras!");
}