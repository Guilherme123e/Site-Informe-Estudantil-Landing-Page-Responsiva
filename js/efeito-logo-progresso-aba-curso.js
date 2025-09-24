function cont(iddiv, chave) {
  const c1 = document.getElementById(iddiv)


  if (localStorage.getItem(chave) === "true") {
    c1.style.display = "";
  } else {
    c1.style.display = "none";
  }
}

cont("p1", "pythonSelecionado");
cont("p2", "rubySelecionado");
cont("p3", "javaSelecionado");
cont("p4", "c++Selecionado");