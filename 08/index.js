const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];
const frutasModificado = frutas.map((fruta) => {
    let primeiraLetra = fruta.slice(0, 1).toUpperCase();
    let frutasMinusc = fruta.slice(1).toLowerCase();
    const indice = frutas.indexOf(fruta);

    return `${indice} - ${primeiraLetra + frutasMinusc}`;
});

console.log(frutasModificado);