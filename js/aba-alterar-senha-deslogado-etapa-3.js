// Função para gerar uma senha aleatória com as condições especificadas
function gerarSenhaAleatoria() {
  const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let senha = "";
  for (let i = 0; i < 12; i++) {
    senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return senha;
}

// Função para validar se a senha segue os critérios (mínimo de 8 caracteres, letras maiúsculas, minúsculas, números e caractere especial)
function validarSenha(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return regex.test(senha);
}

// Função para exibir a mensagem de erro no alerta customizado
function exibirErro(mensagem) {
  const alertBox = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");
  alertMessage.innerHTML = mensagem;
  alertBox.classList.remove('hidden'); // Exibe a caixa de alerta
}

// Função para fechar o alerta
function closeAlert() {
  const alertBox = document.getElementById("custom-alert");
  alertBox.classList.add('hidden'); // Esconde a caixa de alerta
}

// Função para garantir que os campos de senha são do tipo "password" (isso vai garantir que a senha fique oculta)
function garantirTipoSenha() {
  document.getElementById("confemail11").setAttribute("type", "password");
  document.getElementById("confemail22").setAttribute("type", "password");
}

// Função para simular a senha aleatória e preencher os campos de senha e confirmação de senha
function simularSenha() {
  const senhaAleatoria = gerarSenhaAleatoria(); // Gerando senha aleatória
  localStorage.setItem('senha_simulada', senhaAleatoria); // Salvando a senha gerada no localStorage

  // Preenchendo os campos de senha e confirmar senha com o mesmo valor
  document.getElementById("confemail11").value = senhaAleatoria;
  document.getElementById("confemail22").value = senhaAleatoria;
}

// Função para validar as senhas antes de prosseguir
function validarSenhas() {
  const senhaInput = document.getElementById("confemail11").value;  // Senha inserida no campo "senha"
  const confirmarSenhaInput = document.getElementById("confemail22").value;  // Senha inserida no campo "confirmar senha"

  // Recuperando o contêiner da caixa de alerta
  const alertBox = document.getElementById("custom-alert");
  const alertMessage = document.getElementById("alert-message");

  // Verifica se a senha é válida
  if (!validarSenha(senhaInput)) {
    alertMessage.innerHTML = "A senha deve ter no mínimo 8 caracteres e conter pelo menos: uma letra maiúscula, uma minúscula, um número e um caractere especial!";
    alertBox.classList.remove('hidden'); // Exibe a caixa de alerta
  } else if (senhaInput !== confirmarSenhaInput) {
    alertMessage.innerHTML = "As senhas não coincidem!";
    alertBox.classList.remove('hidden'); // Exibe a caixa de alerta
  } else {
    // Salva a senha no localStorage após a validação
    localStorage.setItem('cadastro_senha', senhaInput);

    // Se tudo estiver correto, redireciona para a página de sucesso
    window.location.href = 'aba-alterar-senha-deslogado-etapa-4.html';
  }
}

// Selecionando o botão de simulação da senha e adicionando o evento
document.getElementById("btnconfmail").addEventListener("click", function () {
  simularSenha();  // Chama a função para gerar e preencher a senha no input
});

// Alterando o comportamento do botão de validação para usar a função de validação
document.getElementById("bu").addEventListener("click", function (event) {
  event.preventDefault();  // Impede o redirecionamento imediato
  validarSenhas();  // Chama a função de validação
});

// Garantir que os campos de senha sempre apareçam como "password" ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  garantirTipoSenha();
});
