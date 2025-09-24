// Função para salvar o estado das caixas de seleção no localStorage
function salvarPreferencias() {
  // Armazena os estados das caixas de seleção
  localStorage.setItem('ntf1', document.getElementById('ntf1').checked);
  localStorage.setItem('ntf2', document.getElementById('ntf2').checked);
  localStorage.setItem('ntf3', document.getElementById('ntf3').checked);
  localStorage.setItem('ntf4', document.getElementById('ntf4').checked);
}

// Event Listener para o botão
document.getElementById('bu').addEventListener('click', function () {
  // Salva as preferências antes de redirecionar para os termos de uso
  salvarPreferencias();
  // Redireciona para a página de termos de uso
  window.location.href = 'aba-cadastro-do-usuario-etapa-4-termos-de-uso.html';
});
;