function configurarBotaoInscricao(idBotao, chaveLocalStorage, classeSelecionado) {
  const botao = document.getElementById(idBotao);

  if (!botao) {
    console.error(`Botão com ID '${idBotao}' não encontrado.`);
    return;
  }

  // Verifica se o plano está ativo
  const planoAtivo = localStorage.getItem("estadoPlano") === "true";

  if (!planoAtivo) {
    // Se o plano NÃO estiver ativo, muda o botão para "Ativar meu plano"
    botao.textContent = "Ativar meu plano";
    botao.classList.remove(classeSelecionado); // Remove estilo anterior, se houver

    botao.addEventListener("click", () => {
      window.location.href = "aba-ativacao-plano-pagamento-visualizacao-etapa-2-situacao-plano.html";
    });

    return; // Sai da função, não aplica o restante da lógica
  }

  // Se o plano estiver ativo, segue a lógica normal de inscrição
  const valorSalvo = localStorage.getItem(chaveLocalStorage);

  if (valorSalvo === "true") {
    botao.classList.add(classeSelecionado);
    botao.textContent = "CANCELAR INSCRIÇÃO";
  } else {
    botao.classList.remove(classeSelecionado);
    botao.textContent = "INSCREVER-SE";
  }

  botao.addEventListener("click", () => {
    const estaSelecionado = botao.classList.toggle(classeSelecionado);

    botao.textContent = estaSelecionado ? "CANCELAR INSCRIÇÃO" : "INSCREVER-SE";
    localStorage.setItem(chaveLocalStorage, estaSelecionado);

    location.reload();
  });
}

// Configurar os botões:
configurarBotaoInscricao("b1", "pythonSelecionado", "selecionado");
configurarBotaoInscricao("b2", "rubySelecionado", "selecionado2");
configurarBotaoInscricao("b3", "javaSelecionado", "selecionado3");
configurarBotaoInscricao("b4", "c++Selecionado", "selecionado4");
