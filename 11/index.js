const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];
const nomesA = nomes.filter((nome) => {
    return nome[0] === "a" || nome[0] === "A";
});

console.log(nomesA);