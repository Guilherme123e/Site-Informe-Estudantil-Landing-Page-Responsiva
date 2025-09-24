document.addEventListener('DOMContentLoaded', function () {
  const selectElement = document.getElementById('ad');
  const inputElement = document.getElementById('confemail1');
  const labelElement = document.getElementById('confemail'); // Captura a label também

  function toggleInputVisibility() {
    const isOutro = selectElement.value === 'outro';
    inputElement.style.display = isOutro ? 'block' : 'none';
    labelElement.style.display = isOutro ? 'block' : 'none';
  }

  selectElement.addEventListener('change', toggleInputVisibility);

  toggleInputVisibility(); // Executa no carregamento da página
});
