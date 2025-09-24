function cont(iddiv, chave) {
  const c1 = document.getElementById(iddiv);

  if (!c1) {
    console.error(`Elemento com id "${iddiv}" não encontrado.`);
    return;
  }

  const valorSalvo = localStorage.getItem(chave);

  if (valorSalvo === "true") {
    c1.style.display = "flex";
  } else {
    c1.style.display = "none";
  }
}

// Chamada para todos os cursos
cont("aa1", "pythonSelecionado");
cont("aa2", "rubySelecionado");
cont("aa3", "javaSelecionado");
cont("aa4", "c++Selecionado");
