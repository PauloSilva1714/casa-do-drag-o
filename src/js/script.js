// Seleciona os elementos necessários
const imagens = document.querySelectorAll('.imagem');
const botoes = document.querySelectorAll('.botao');
const informacoes = document.querySelectorAll('.informacoes');

// Define a imagem inicial como ativa
imagens[0].classList.add('ativa');
botoes[0].classList.add('selecionado');
informacoes[0].classList.add('ativa');

// Adiciona um ouvinte de evento para cada botão
botoes.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    // Remove a classe 'ativa' de todas as imagens e botões
    imagens.forEach(imagem => imagem.classList.remove('ativa'));
    botoes.forEach(btn => btn.classList.remove('selecionado'));

    // Adiciona a classe 'ativa' para a imagem e o botão correspondentes
    imagens[indice].classList.add('ativa');
    botao.classList.add('selecionado');

    // Remove a classe 'ativa' de todas as informações
    informacoes.forEach(info => info.classList.remove('ativa'));

    // Adiciona a classe 'ativa' para a informação correspondente
    informacoes[indice].classList.add('ativa');
  });
});