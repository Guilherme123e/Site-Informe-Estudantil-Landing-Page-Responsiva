document.addEventListener('DOMContentLoaded', function () {
  const ctp1 = document.getElementById("ctp1");
  const cvp1 = document.getElementById("cvp1");

  if (!ctp1 || !cvp1) {
    console.error("Elementos ctp1 ou cvp1 não encontrados!");
    return;
  }

  const planoSelecionado = localStorage.getItem("planoSelecionado");

  if (planoSelecionado === "men") {
    ctp1.innerHTML = "PLANO<br>MENSAL";
    cvp1.innerHTML = "R$ 49,99";
  } else if (planoSelecionado === "anu") {
    ctp1.innerHTML = "PLANO<br>ANUAL";
    cvp1.innerHTML = "R$ 499,99";
  } else {
    // Caso nenhum plano esteja selecionado ainda
    ctp1.innerHTML = "Nenhum plano";
    cvp1.innerHTML = "-";
  }
});
