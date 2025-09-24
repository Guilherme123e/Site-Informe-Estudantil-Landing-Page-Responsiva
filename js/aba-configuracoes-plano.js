document.addEventListener("DOMContentLoaded", function () {
  const botaoAlterarPlano = document.getElementById("o1");
  const botaoAtualizarPagamento = document.getElementById("o2");
  const botaoCancelarAssinatura = document.getElementById("o3");
  const botaoReativarPlano = document.getElementById("o4");
  const botaoDadosCartao = document.getElementById("o5");

  // Funções para verificar estado
  function estadoPlanoAtivo() {
    return localStorage.getItem("estadoPlano") === "true";
  }

  function pagamentoComCartao() {
    return localStorage.getItem("credito") === "true";
  }

  // Função para mostrar alerta customizado
  function showCustomAlert(mensagem) {
    const alertBox = document.getElementById("custom-alert2");
    const alertMessage = document.getElementById("alert-message2");
    alertMessage.textContent = mensagem;
    alertBox.classList.remove("hidden2");
  }

  // Função para fechar alerta (usada no botão OK)
  window.closeAlert2 = function () {
    document.getElementById("custom-alert2").classList.add("hidden2");
  };

  // Botão: Alterar plano
  if (botaoAlterarPlano) {
    botaoAlterarPlano.addEventListener("click", function () {
      if (estadoPlanoAtivo()) {
        showCustomAlert("Só é possível alterar o plano atual após o vencimento ou cancelamento.");
      } else {
        window.location.href = "aba-ativacao-plano-pagamento-etapa-1-escolher-plano-e-forma-de-pagamento.html";
      }
    });
  }

  // Botão: Atualizar forma de pagamento
  if (botaoAtualizarPagamento) {
    botaoAtualizarPagamento.addEventListener("click", function () {
      if (estadoPlanoAtivo()) {
        showCustomAlert("Só é possível alterar a forma de pagamento do plano atual após o vencimento ou cancelamento.");
      } else {
        window.location.href = "aba-ativacao-plano-pagamento-etapa-1-escolher-plano-e-forma-de-pagamento.html";
      }
    });
  }

  // Botão: Reativar plano
  if (botaoReativarPlano) {
    botaoReativarPlano.addEventListener("click", function () {
      if (estadoPlanoAtivo()) {
        showCustomAlert("Só é possível reativar o plano após o vencimento ou cancelamento do atual.");
      } else {
        window.location.href = "aba-ativacao-plano-pagamento-etapa-1-escolher-plano-e-forma-de-pagamento.html";
      }
    });
  }

  // Botão: Cancelar assinatura
  if (botaoCancelarAssinatura) {
    botaoCancelarAssinatura.addEventListener("click", function () {
      if (!estadoPlanoAtivo()) {
        showCustomAlert("Seu plano está atualmente com o pagamento pendente, portanto não tem como cancelar o mesmo.");
      } else {
        window.location.href = "aba-ativacao-plano-pagamento-visualizacao-etapa-2-situacao-plano.html";
      }
    });
  }

  // Botão: Dados do cartão de crédito
  if (botaoDadosCartao) {
    botaoDadosCartao.addEventListener("click", function () {
      if (pagamentoComCartao()) {
        window.location.href = "aba-ativacao-plano-pagamento-visualizacao-etapa-3-confirmar-pagamento.html";
      } else {
        showCustomAlert("A forma de pagamento do seu plano não é cartão de crédito");
      }
    });
  }
});
