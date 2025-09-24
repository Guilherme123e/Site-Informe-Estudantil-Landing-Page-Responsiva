const checkbox = document.getElementById('concordo');
const button = document.getElementById('btnContinuar');

checkbox.addEventListener('change', function () {
  button.disabled = !this.checked;
});

button.addEventListener('click', function () {
  window.location.href = 'aba-cadastro-do-usuario-etapa-5-conta-criada-com-sucesso.html';
});
