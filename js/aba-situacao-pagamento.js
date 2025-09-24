document.addEventListener('DOMContentLoaded', function () {
  const plano = localStorage.getItem("planoSelecionado");

  const tipoPlanoEl = document.getElementById("tipoplano2");
  const valorPlanoEl = document.getElementById("valorplano2");
  const formaPagamentoEl = document.getElementById("formap2");
  const proximoPagamentoEl = document.getElementById("prop2");

  if (!tipoPlanoEl || !valorPlanoEl || !formaPagamentoEl || !proximoPagamentoEl) {
    console.error("Erro: Elementos esperados não encontrados no HTML.");
    return;
  }

  // Define tipo e valor do plano
  if (plano === "men") {
    tipoPlanoEl.textContent = "mensal";
    valorPlanoEl.textContent = "R$49,99";
  } else if (plano === "anu") {
    tipoPlanoEl.textContent = "anual";
    valorPlanoEl.textContent = "R$499,99";
  } else {
    tipoPlanoEl.textContent = "não selecionado";
    valorPlanoEl.textContent = "-";
  }

  // Define forma de pagamento
  if (localStorage.getItem("pix") === "true") {
    formaPagamentoEl.textContent = "Pix";
  } else if (localStorage.getItem("boleto") === "true") {
    formaPagamentoEl.textContent = "Boleto";
  } else if (localStorage.getItem("credito") === "true") {
    formaPagamentoEl.textContent = "Cartão de crédito";
  } else {
    formaPagamentoEl.textContent = "não selecionado";
  }

});

