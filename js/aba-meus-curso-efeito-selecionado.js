function meusc(iddiv, chave) {
  const c1 = document.getElementById(iddiv)

  if (localStorage.getItem(chave) === "true") {
    c1.style.display = "block";
    document.getElementById('meus1').style.display = "none";
  } else {
    c1.style.display = "none";
  }
}

meusc("1", "pythonSelecionado");
meusc("2", "rubySelecionado");
meusc("3", "javaSelecionado");
meusc("4", "c++Selecionado");




