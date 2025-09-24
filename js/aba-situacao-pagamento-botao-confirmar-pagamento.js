window.onload = function () {
  const planoSelecionado = localStorage.getItem('planoSelecionado');
  const botaoConfPag1 = document.getElementById('confpag1');
  const botaoConfPag2 = document.getElementById('confpag2');

  if (planoSelecionado) {
    // Se 'planoSelecionado' tiver algum valor, altera o texto para "Confirmar Pagamento" e o link
    botaoConfPag1.textContent = "Confirmar Pagamento";

    // Mostra o botão "Simular pagamento" com display flex e centralizado
    botaoConfPag2.style.display = "flex";
    botaoConfPag2.style.justifyContent = "center";
    botaoConfPag2.style.alignItems = "center";
  } else {
    // Caso contrário, altera o texto para "Escolher Plano" e o link
    botaoConfPag1.textContent = "Escolher Plano";
    botaoConfPag1.href = "aba-ativacao-plano-pagamento-etapa-1-escolher-plano-e-forma-de-pagamento.html";

    // Oculta o botão "Simular pagamento"
    botaoConfPag2.style.display = "none";
  }
};
