document.getElementById("entrar").addEventListener("click", function () {
  const emailInput = document.getElementById("EMAIL1").value.trim();
  const senhaInput = document.getElementById("senha1").value;

  const emailSalvo = localStorage.getItem("cadastro_email");
  const senhaSalva = localStorage.getItem("cadastro_senha");

  const aviso = document.getElementById("avisologin");

  if (emailInput === emailSalvo) {
    if (senhaInput === senhaSalva) {
      // Login bem-sucedido
      window.location.href = "aba-autenticacao-dois-fatores-login.html";
    } else {
      // Senha incorreta
      aviso.textContent = "Senha incorreta";
      aviso.style.color = "red";
    }
  } else {
    // E-mail não encontrado
    aviso.textContent = "Essa conta não existe";
    aviso.style.color = "red";
  }
});