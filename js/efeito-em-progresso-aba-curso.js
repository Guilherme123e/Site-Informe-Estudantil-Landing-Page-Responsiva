function empro(l11, chave) {
  l1 = document.getElementById(l11);

  const valorSalvo = localStorage.getItem(chave);

  if (valorSalvo === "true") {
    l1.textContent = "EM PROGRESSO";

  } else {
    l1.textContent = "SABER MAIS";
  }
}


empro('ii1', 'pythonSelecionado')
empro('ii2', 'rubySelecionado')
empro('ii3', 'javaSelecionado')
empro('ii4', 'c++Selecionado')