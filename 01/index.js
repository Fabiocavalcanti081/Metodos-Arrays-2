const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function posicaoLivro(livros, nomeDoLivro) {
    console.log(`O livro está na posição ${livros.indexOf(nomeDoLivro) + 1}`);
}

posicaoLivro(livros, nomeDoLivro);