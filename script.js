// 1. Seleciona os elementos do HTML pelo ID
const campoPreco = document.getElementById('preco');
const btnCalcular = document.getElementById('btnCalcular');
const textoResultado = document.getElementById('resultado');

// 2. Adiciona o evento de clique no botão
btnCalcular.addEventListener('click', () => {
    // Pegando o valor do input e convertendo para número
    const precoOriginal = Number(campoPreco.value);

    // Validação: verifica se o usuário digitou um número válido
    if (!precoOriginal || precoOriginal <= 0) {
        textoResultado.textContent = 'Por favor, insira um valor válido!';
        textoResultado.style.color = '#ff4757';
        return;
    }

    // Cálculo: 10% de desconto
    const desconto = precoOriginal * 0.10;
    const precoFinal = precoOriginal - desconto;

    // Atualiza o texto na tela com o resultado formatado
    textoResultado.textContent = `Preço com desconto: R$ ${precoFinal.toFixed(2)}`;
    textoResultado.style.color = '#00d26a';
});