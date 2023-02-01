const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];
const frutasModificado = frutas.map((fruta) => {
    let primeiraLetra = fruta.slice(0, 1);
    let frutasMinusc = fruta.slice(1);
    primeiraLetra = primeiraLetra.toUpperCase();
    frutasMinusc = frutasMinusc.toLowerCase();
    const nomeCorreto = primeiraLetra + frutasMinusc;
    const indice = frutas.indexOf(fruta);

    return `${indice} - ${nomeCorreto}`;
});

console.log(frutasModificado);