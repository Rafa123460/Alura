// Função para criar e adicionar um cartão na página
function criaCartao(categoria, pergunta, resposta) {
    // Cria o contêiner do cartão
    const cartao = document.createElement('div');
    cartao.classList.add('cartao'); // Adiciona a classe 'cartao'

    // Cria a parte interna do cartão (onde o efeito de flip vai acontecer)
    const cartaoInner = document.createElement('div');
    cartaoInner.classList.add('cartao-inner'); // Adiciona a classe para o flip

    // Cria a frente do cartão (pergunta)
    const cartaoFront = document.createElement('div');
    cartaoFront.classList.add('cartao-front'); // Adiciona a classe para o estilo da frente
    cartaoFront.textContent = pergunta; // Define a pergunta como o conteúdo da frente

    // Cria o verso do cartão (resposta)
    const cartaoBack = document.createElement('div');
    cartaoBack.classList.add('cartao-back'); // Adiciona a classe para o estilo do verso
    cartaoBack.textContent = resposta; // Define a resposta como o conteúdo do verso

    // Adiciona a frente e o verso ao cartão
    cartaoInner.appendChild(cartaoFront);
    cartaoInner.appendChild(cartaoBack);

    // Adiciona a parte interna ao contêiner do cartão
    cartao.appendChild(cartaoInner);

    // Adiciona o cartão ao contêiner de cartões na página
    document.getElementById('cartoes-container').appendChild(cartao);

    // Adiciona o evento de clique para virar o cartão
    cartao.addEventListener('click', () => {
        cartao.classList.toggle('clicked'); // Alterna a classe 'clicked' para virar o cartão
    });
}

// Chamada da função criaCartao() para adicionar 15 cartões sobre o Corinthians

criaCartao(
    'História do Corinthians',
    'Quem foi o primeiro grande ídolo do Corinthians?',
    'O primeiro grande ídolo do Corinthians foi o atacante Tevez.'
);

criaCartao(
    'Títulos',
    'Quantos títulos do Campeonato Brasileiro o Corinthians tem?',
    'O Corinthians conquistou o Campeonato Brasileiro 7 vezes: 1990, 1998, 1999, 2005, 2011, 2015 e 2017.'
);

criaCartao(
    'Jogadores',
    'Quem é o maior artilheiro da história do Corinthians?',
    'O maior artilheiro da história do Corinthians é o atacante Luisão, com 298 gols.'
);

criaCartao(
    'Estádio',
    'Qual é o nome do estádio do Corinthians?',
    'O estádio do Corinthians é a Arena Corinthians, também conhecida como Itaquerão.'
);

criaCartao(
    'Músicas',
    'Qual é a música mais conhecida da torcida do Corinthians?',
    'A música mais famosa da torcida é: “Salve o Corinthians, o campeão dos campeões!”'
);

criaCartao(
    'Rivalidades',
    'Quem é o principal rival do Corinthians?',
    'O principal rival do Corinthians é o Palmeiras, com quem disputam o clássico paulista.'
);

criaCartao(
    'Futebol Feminino',
    'Como está o time de futebol feminino do Corinthians?',
    'O time de futebol feminino do Corinthians é um dos mais vitoriosos do Brasil, com várias conquistas no Campeonato Brasileiro e na Libertadores Feminina.'
);

criaCartao(
    'Conquistas Internacionais',
    'Quais são os principais títulos internacionais conquistados pelo Corinthians?',
    'Os principais títulos internacionais do Corinthians são a Copa Libertadores (2012) e o Mundial de Clubes da FIFA (2000, 2012).'
);

criaCartao(
    'Maiores Jogadores',
    'Quem foi o maior jogador da história do Corinthians?',
    'O maior jogador da história do Corinthians é Sócrates, um ícone que revolucionou o futebol brasileiro.'
);

criaCartao(
    'Treinadores',
    'Quem foi o treinador que levou o Corinthians ao título da Libertadores de 2012?',
    'O treinador que levou o Corinthians ao título da Libertadores de 2012 foi Tite.'
);

criaCartao(
    'Maior Público',
    'Qual foi o maior público presente em uma partida do Corinthians?',
    'O maior público presente em uma partida do Corinthians foi de 65.000 pessoas, na final da Libertadores de 2012.'
);

criaCartao(
    'Fundação',
    'Em que ano o Corinthians foi fundado?',
    'O Corinthians foi fundado em 1º de setembro de 1910.'
);

criaCartao(
    'Mascote',
    'Qual é o nome do mascote do Corinthians?',
    'O nome do mascote do Corinthians é "Mosqueteiro", representando a força e determinação do time.'
);

criaCartao(
    'Primeiro Campeonato',
    'Em que ano o Corinthians conquistou seu primeiro Campeonato Paulista?',
    'O Corinthians conquistou seu primeiro Campeonato Paulista em 1914.'
);

criaCartao(
    'Superstição',
    'Qual é a superstição mais famosa da torcida do Corinthians?',
    'A superstição mais famosa da torcida do Corinthians é o "bicho-papão" nas finais de campeonato.'
);

criaCartao(
    'Camisa',
    'Qual é a cor principal da camisa do Corinthians?',
    'A camisa principal do Corinthians é branca, com detalhes em preto.'
);
