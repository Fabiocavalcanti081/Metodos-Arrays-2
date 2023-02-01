const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

function some(palavras) {
    let vodka = palavras.includes("vodka");
    let cerveja = palavras.includes("cerveja");

    if (vodka || cerveja) {
        console.log("revise sua lista, joão. possui bebida com venda proibida!");
    } else {
        console.log("tudo certo, vamos as compras!");
    }
}

some(palavras);