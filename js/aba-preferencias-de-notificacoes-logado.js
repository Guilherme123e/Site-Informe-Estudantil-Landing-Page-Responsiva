// Função para restaurar as preferências dos checkboxes do localStorage
function restaurarPreferencias() {
  // Verifica se existe algum valor salvo no localStorage para cada checkbox e aplica ao estado do checkbox
  if (localStorage.getItem('ntf1') === 'true') {
    document.getElementById('ntf1').checked = true;
  }
  if (localStorage.getItem('ntf2') === 'true') {
    document.getElementById('ntf2').checked = true;
  }
  if (localStorage.getItem('ntf3') === 'true') {
    document.getElementById('ntf3').checked = true;
  }
  if (localStorage.getItem('ntf4') === 'true') {
    document.getElementById('ntf4').checked = true;
  }
}

// Função para salvar o estado dos checkboxes no localStorage
function salvarPreferencias() {
  // Armazena os estados das caixas de seleção
  localStorage.setItem('ntf1', document.getElementById('ntf1').checked);
  localStorage.setItem('ntf2', document.getElementById('ntf2').checked);
  localStorage.setItem('ntf3', document.getElementById('ntf3').checked);
  localStorage.setItem('ntf4', document.getElementById('ntf4').checked);
}

// Restaura as preferências assim que a página for carregada
window.onload = function () {
  restaurarPreferencias();
};

// Adiciona o evento de salvar preferências quando o botão for clicado
document.getElementById('bu').addEventListener('click', function () {
  salvarPreferencias();
});
