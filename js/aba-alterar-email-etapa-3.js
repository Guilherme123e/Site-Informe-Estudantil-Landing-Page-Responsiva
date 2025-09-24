// Função para gerar um email aleatório
function gerarEmailAleatorio() {
  const nomes = ["user", "admin", "teste", "exemplo", "contato"];
  const dominios = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const dominio = dominios[Math.floor(Math.random() * dominios.length)];
  return `${nome}${Math.floor(Math.random() * 1000)}@${dominio}`;
}

// Função para simular o email (preencher os dois inputs)
function simularEmail() {
  const emailSimulado = gerarEmailAleatorio(); // Gerando o email aleatório
  localStorage.setItem('cadastro_email', emailSimulado); // Salvando o email simulado no localStorage com a chave correta

  // Preenchendo os campos de email e confirmar email com o mesmo valor
  document.getElementById("confemail11").value = emailSimulado;
  document.getElementById("confemail22").value = emailSimulado;
}

// Função para validar os emails antes de prosseguir
function validarEmails() {
  const emailInput = document.getElementById("confemail11").value;  // Email inserido no campo "email"
  const confirmarEmailInput = document.getElementById("confemail22").value;  // Email inserido no campo "confirmar email"

  // Recuperando o contêiner da caixa de alerta
  const alertBox = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");

  // Verifica se o email é válido e se os dois emails são iguais
  const emailValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInput);  // Expressão regular para validar email

  if (!emailValido) {
    alertMessage.innerHTML = "Por favor, insira um email válido!";
    alertBox.classList.remove('hidden'); // Exibe a caixa de alerta
  } else if (emailInput !== confirmarEmailInput) {
    alertMessage.innerHTML = "Os e-mails não coincidem!";
    alertBox.classList.remove('hidden'); // Exibe a caixa de alerta
  } else {
    // Se tudo estiver correto, salvar o email no localStorage e redirecionar para a página de sucesso
    localStorage.setItem('cadastro_email', emailInput);
    window.location.href = 'aba-alterar-email-etapa-4.html';
  }
}

// Função para fechar o alerta
function closeAlert() {
  const alertBox = document.getElementById("custom-alert");
  alertBox.classList.add('hidden'); // Esconde a caixa de alerta
}

// Selecionando o botão de simulação do email e adicionando o evento
document.getElementById("btnconfmail").addEventListener("click", function () {
  simularEmail();  // Chama a função para gerar e preencher o email no input
});

// Alterando o comportamento do botão de validação para usar a função de validação
document.getElementById("bu").addEventListener("click", function (event) {
  event.preventDefault();  // Impede o redirecionamento imediato
  validarEmails();  // Chama a função de validação
});
