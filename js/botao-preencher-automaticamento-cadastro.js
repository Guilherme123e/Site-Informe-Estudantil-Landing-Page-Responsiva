document.addEventListener("DOMContentLoaded", () => {
  const botaoSimular = document.getElementById("simularc");

  botaoSimular.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector(".n2").value = "GUILHERME RODRIGUES DE OLIVEIRA";
    document.querySelector(".u2").value = "GUILHERME123E";
    document.querySelector(".em2").value = "GUILHERME@email.com";
    document.querySelector(".cem2").value = "GUILHERME@email.com";
    document.querySelector(".s2").value = "Senha@123";
    document.querySelector(".cs2").value = "Senha@123";
    document.querySelector(".t2").value = "11999999999";
    document.querySelector(".c2").value = "12345678901";
    document.querySelector(".r2").value = "12345678";
    document.querySelector(".e2").value = "Rua das Flores, 123";
    document.querySelector(".d2").value = "13/04/2001";
    document.querySelector(".g2").value = "masculino"; // ajuste de acordo com os valores reais do <select>
  });
});