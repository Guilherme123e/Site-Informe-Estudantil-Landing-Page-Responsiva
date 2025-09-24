// Função para gerar um código aleatório de 6 números
function gerarCodigoAleatorio() {
  let codigo = '';
  for (let i = 0; i < 6; i++) {
    codigo += Math.floor(Math.random() * 10); // Gerando número aleatório entre 0 e 9
  }
  return codigo;
}

// Função para simular o código
function simularCodigo() {
  const codigoSimulado = gerarCodigoAleatorio(); // Gerando o código aleatório
  localStorage.setItem('codigo_simulado', codigoSimulado); // Salvando o código simulado no localStorage
  document.getElementById("confemail1").value = codigoSimulado; // Preenchendo o input com o código gerado
}

// Função para validar o código antes de redirecionar
function validarCodigo() {
  const codigoInput = document.getElementById("confemail1").value;  // Código inserido pelo usuário
  const codigoSimulado = localStorage.getItem('codigo_simulado');  // Código armazenado no localStorage

  // Recuperando o contêiner da caixa de alerta
  const alertBox = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");

  // Verifica se o código digitado é igual ao gerado ou ao salvo no localStorage
  if (codigoInput === codigoSimulado) {
    // Se for válido, redireciona
    window.location.href = 'aba-alterar-senha-deslogado-etapa-3.html';
  } else {
    // Se for inválido, exibe o alerta
    alertMessage.innerHTML = "Código inválido!";
    alertBox.classList.remove('hidden'); // Exibe a caixa de alerta
  }
}

// Função para fechar o alerta
function closeAlert() {
  const alertBox = document.getElementById("custom-alert");
  alertBox.classList.add('hidden'); // Esconde a caixa de alerta
}

// Selecionando o botão de simulação do código e adicionando o evento
document.getElementById("btnconfmail2").addEventListener("click", function () {
  simularCodigo();  // Chama a função para gerar e preencher o código no input
});

// Alterando o comportamento do botão de validação para usar a função de validação
document.getElementById("bu").addEventListener("click", function (event) {
  event.preventDefault();  // Impede o redirecionamento imediato
  validarCodigo();  // Chama a função de validação
});
