// Função para calcular a diferença de dias
function calcularDiasPassados(data1, data2) {
  const diffTime = Math.abs(data2 - data1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // diferença em dias
}

document.getElementById('contratoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Verifica se o usuário já assinou o contrato recentemente
  const ultimaAssinatura = localStorage.getItem('ultimaAssinatura');
  const dataAtual = new Date();
  
  if (ultimaAssinatura) {
    const ultimaData = new Date(ultimaAssinatura);
    const diasPassados = calcularDiasPassados(ultimaData, dataAtual);

    if (diasPassados < 60) {
      alert(`Você só pode assinar o contrato uma vez a cada 60 dias. Faltam ${60 - diasPassados} dias para você poder assinar novamente.`);
      return;
    }
  }

  // Exibe a mensagem de contrato assinado
  document.getElementById('mensagemFinal').style.display = 'block';

  // Obtém o nome do jogador e inicia a animação
  const nome = document.getElementById('nome').value;
  document.getElementById('nomeDigitalizado').textContent = nome;
  
  // Inicia a animação de digitação
  document.getElementById('nomeDigitalizado').style.animation = 'digitar 3s steps(30) 1s forwards';
  
  // Faz a caneta aparecer e animar
  const caneta = document.getElementById('caneta');
  caneta.style.animation = 'balancar 1s infinite, mostrarCaneta 1s forwards';
  
  // Exibe o carimbo com o link para o Discord
  document.getElementById('carimbo').style.display = 'block';
  
  // Armazena a data da assinatura no localStorage
  localStorage.setItem('ultimaAssinatura', dataAtual.toISOString());

  // Limpa o formulário
  document.getElementById('contratoForm').reset();
});

// Função para exibir as regras quando o botão for clicado
document.getElementById('botaoRegras').addEventListener('click', function() {
  const regrasDiv = document.getElementById('regras');
  regrasDiv.style.display = (regrasDiv.style.display === 'block') ? 'none' : 'block';
});
