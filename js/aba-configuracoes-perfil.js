document.addEventListener("DOMContentLoaded", () => {
  // Função que preenche os campos com valores do localStorage ou com valores padrões
  const preencherCampos = () => {
    // Verificar e preencher campos com valores do localStorage, se existirem
    if (!localStorage.getItem("cadastro_nome")) {
      document.querySelector(".n2").value = "GUILHERME RODRIGUES DE OLIVEIRA";
    } else {
      document.querySelector(".n2").value = localStorage.getItem("cadastro_nome");
    }

    if (!localStorage.getItem("cadastro_usuario")) {
      document.querySelector(".u2").value = "GUILHERME123E";
    } else {
      document.querySelector(".u2").value = localStorage.getItem("cadastro_usuario");
    }

    if (!localStorage.getItem("cadastro_email")) {
      document.querySelector(".em2").value = "GUILHERME@email.com";
    } else {
      document.querySelector(".em2").value = localStorage.getItem("cadastro_email");
    }

    if (!localStorage.getItem("cadastro_telefone")) {
      document.querySelector(".ttt2").value = "11999999999";
    } else {
      document.querySelector(".ttt2").value = localStorage.getItem("cadastro_telefone");
    }

    if (!localStorage.getItem("cadastro_cpf")) {
      document.querySelector(".cp2").value = "12345678901";
    } else {
      document.querySelector(".cp2").value = localStorage.getItem("cadastro_cpf");
    }

    if (!localStorage.getItem("cadastro_rg")) {
      document.querySelector(".r2").value = "12345678";
    } else {
      document.querySelector(".r2").value = localStorage.getItem("cadastro_rg");
    }

    if (!localStorage.getItem("cadastro_endereco")) {
      document.querySelector(".e2").value = "Rua das Flores, 123";
    } else {
      document.querySelector(".e2").value = localStorage.getItem("cadastro_endereco");
    }

    if (!localStorage.getItem("cadastro_data_nascimento")) {
      document.querySelector(".d2").value = "13/04/2001";
    } else {
      document.querySelector(".d2").value = localStorage.getItem("cadastro_data_nascimento");
    }

    if (!localStorage.getItem("cadastro_genero")) {
      document.querySelector(".g2").value = "masculino";
    } else {
      document.querySelector(".g2").value = localStorage.getItem("cadastro_genero");
    }
  };

  // Chama a função para preencher os campos ao carregar a página
  preencherCampos();
});
