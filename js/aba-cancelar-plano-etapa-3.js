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

// Função para limpar os dados do localStorage, removendo apenas 'estadoPlano'
function limparDadosCadastro() {
  localStorage.removeItem("estadoPlano"); // Remove apenas o 'estadoPlano'
  localStorage.removeItem("codigo_simulado"); // Também remove o código simulado
}

// Função para validar o código antes de redirecionar
function validarCodigo() {
  const codigoInput = document.getElementById("confemail1").value;  // Código inserido pelo usuário
  const codigoSimulado = localStorage.getItem('codigo_simulado');  // Código armazenado no localStorage

  const alertBox = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");

  if (codigoInput === codigoSimulado) {
    limparDadosCadastro(); // Limpa os dados antes de redirecionar
    window.location.href = 'aba-cancelar-plano-etapa-4.html';
  } else {
    alertMessage.innerHTML = "Código inválido!";
    alertBox.classList.remove('hidden'); // Exibe a caixa de alerta
  }
}

// Função para fechar o alerta
function closeAlert() {
  const alertBox = document.getElementById("custom-alert");
  alertBox.classList.add('hidden'); // Esconde a caixa de alerta
}

// Evento do botão para simular o código
document.getElementById("btnconfmail2").addEventListener("click", function () {
  simularCodigo();  // Gera e preenche o código no input
});

// Evento do botão para validar o código
document.getElementById("bu").addEventListener("click", function (event) {
  event.preventDefault();  // Impede redirecionamento imediato
  validarCodigo();  // Valida o código inserido
});
