function atualizarEstado() {
  const botao = document.getElementById("confpag2");
  const label = document.getElementById("sit2");
  const confpag1 = document.getElementById("confpag1");

  const estado = localStorage.getItem("estadoPlano") === "true";

  if (estado) {
    botao.textContent = "Cancelar plano";
    botao.style.color = "rgb(109, 8, 8)";
    label.textContent = "Ativado";

    if (confpag1) {
      confpag1.style.display = "none";
    }

  } else {
    botao.textContent = "Simular pagamento";
    botao.style.color = "";
    label.textContent = "Pagamento pendente";
    label.style.color = "";

    if (confpag1) {
      confpag1.style.display = "";
    }

    // Ao cancelar o plano, define os selecionados como false
    localStorage.setItem("c++Selecionado", "false");
    localStorage.setItem("javaSelecionado", "false");
    localStorage.setItem("rubySelecionado", "false");
    localStorage.setItem("pythonSelecionado", "false");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("confpag2");

  atualizarEstado();

  botao.addEventListener("click", (e) => {
    e.preventDefault();

    const estadoAtual = localStorage.getItem("estadoPlano") === "true";

    if (estadoAtual) {
      // Redireciona para a página cancelar-plano.html
      window.location.href = "aba-cancelar-plano-etapa-1.html";
    } else {
      // Continua com o comportamento normal, alternando o estado do plano
      localStorage.setItem("estadoPlano", (!estadoAtual).toString());
      atualizarEstado();
    }
  });
});
