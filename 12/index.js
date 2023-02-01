const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista"
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista"
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador"
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador"
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista"
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador"
    }
];
const programadorMaiorVinte = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Programador" && pessoa.idade > 20;
});
const jornalistasMaisTrinta = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Jornalista" && pessoa.idade > 30;
});
const jornalistasProgramadorJovem = pessoas.filter((pessoa) => {
    return pessoa.profissao === "Programador" && pessoa.idade <= 29 || pessoa.profissao === "Jornalista" && pessoa.idade <= 29;
});

console.log(programadorMaiorVinte);
console.log(jornalistasMaisTrinta);
console.log(jornalistasProgramadorJovem);