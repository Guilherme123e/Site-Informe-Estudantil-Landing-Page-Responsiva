// Função para gerar um email aleatório
function gerarEmailAleatorio() {
  const nomes = ["user", "admin", "teste", "exemplo", "contato"];
  const dominios = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const dominio = dominios[Math.floor(Math.random() * dominios.length)];
  return `${nome}${Math.floor(Math.random() * 1000)}@${dominio}`;
}

// Função para simular o email
function simularEmail() {
  const emailSimulado = gerarEmailAleatorio(); // Gerando o e-mail aleatório
  localStorage.setItem('email_simulado', emailSimulado); // Salvando o email simulado no localStorage
  document.getElementById("confemail1").value = emailSimulado; // Preenchendo o input com o email gerado
}

// Função para validar o email antes de redirecionar
function validarEmail() {
  const emailInput = document.getElementById("confemail1").value;  // Email inserido pelo usuário
  const emailSimulado = localStorage.getItem('email_simulado');  // Email armazenado no localStorage

  // Recuperando o contêiner da caixa de alerta
  const alertBox = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");

  // Verifica se o e-mail digitado é igual ao gerado ou ao salvo no localStorage
  if (emailInput === emailSimulado) {
    // Se for válido, redireciona
    window.location.href = 'aba-alterar-senha-deslogado-etapa-2.html';
  } else {
    // Se for inválido, exibe o alerta
    alertMessage.innerHTML = "Email inválido!";
    alertBox.classList.remove('hidden'); // Exibe a caixa de alerta
  }
}

// Função para fechar o alerta
function closeAlert() {
  const alertBox = document.getElementById("custom-alert");
  alertBox.classList.add('hidden'); // Esconde a caixa de alerta
}

// Selecionando o botão de simulação e adicionando o evento
document.getElementById("btnconfmail").addEventListener("click", function () {
  simularEmail();  // Chama a função para gerar e preencher o email no input
});

// Alterando o comportamento do botão de validação para usar a função de validação
document.getElementById("bu").addEventListener("click", function (event) {
  event.preventDefault();  // Impede o redirecionamento imediato
  validarEmail();  // Chama a função de validação
});
