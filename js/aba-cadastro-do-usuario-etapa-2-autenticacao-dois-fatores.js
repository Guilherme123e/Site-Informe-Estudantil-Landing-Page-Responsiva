// Função para gerar um código aleatório de 6 números
function gerarCodigoAleatorio() {
  let codigo = '';
  for (let i = 0; i < 6; i++) {
    codigo += Math.floor(Math.random() * 10);
  }
  return codigo;
}

// Função para simular os códigos
function simularCodigo() {
  const codigoEmail = gerarCodigoAleatorio();
  let codigoTelefone;

  // Garante que os códigos sejam diferentes
  do {
    codigoTelefone = gerarCodigoAleatorio();
  } while (codigoTelefone === codigoEmail);

  // Armazena os códigos no localStorage
  localStorage.setItem('codigo_email', codigoEmail);
  localStorage.setItem('codigo_telefone', codigoTelefone);

  // Preenche os inputs
  document.getElementById("confemail1").value = codigoEmail;
  document.getElementById("conftel1").value = codigoTelefone;
}

// Função para validar os códigos
function validarCodigo() {
  const codigoDigitadoEmail = document.getElementById("confemail1").value;
  const codigoDigitadoTelefone = document.getElementById("conftel1").value;

  const codigoGeradoEmail = localStorage.getItem('codigo_email');
  const codigoGeradoTelefone = localStorage.getItem('codigo_telefone');

  const alertBox = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");

  if (codigoDigitadoEmail === codigoGeradoEmail && codigoDigitadoTelefone === codigoGeradoTelefone) {
    window.location.href = 'aba-cadastro-do-usuario-etapa-3-preferencias-de-notificacao.html';
  } else {
    alertMessage.innerHTML = "Código inválido!";
    alertBox.classList.remove('hidden');
  }
}

// Fecha o alerta
function closeAlert() {
  const alertBox = document.getElementById("custom-alert");
  alertBox.classList.add('hidden');
}

// Evento do botão "Simular Código"
document.getElementById("btnconfmail2").addEventListener("click", function () {
  simularCodigo();
});

// Evento do botão "Prosseguir"
document.getElementById("bu").addEventListener("click", function (event) {
  event.preventDefault();
  validarCodigo();
});
