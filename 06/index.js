const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];
let cidadesComOito = cidades.filter((cidades) => {
    return cidades.length <= 8
});
cidadesComOito = cidadesComOito.join(", ");

console.log(cidadesComOito);