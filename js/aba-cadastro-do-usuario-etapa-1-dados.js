document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("bu");
  const erroContainer = document.getElementById("srerro");

  function exibirErro(mensagem) {
    erroContainer.textContent = mensagem;
    erroContainer.style.display = "block";
  }

  function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validarDataNascimento(dataNasc) {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataNasc)) {
      return false;
    }
    const [diaStr, mesStr, anoStr] = dataNasc.split('/');
    const dia = Number(diaStr);
    const mes = Number(mesStr);
    const ano = Number(anoStr);
    const dataObj = new Date(`${ano}-${mes}-${dia}`);
    const hoje = new Date();
    if (isNaN(dataObj.getTime()) || dataObj > hoje || ano < 1900 || dia < 1 || dia > 31 || mes < 1 || mes > 12) {
      return false;
    }
    return true;
  }

  function validarCPF(cpf) {
    const cpfLimpo = cpf.replace(/[^\d]/g, '');
    return /^\d{11}$/.test(cpfLimpo);
  }

  function validarRG(rg) {
    const rgLimpo = rg.replace(/[^\d]/g, '');
    return /^\d{7,9}$/.test(rgLimpo);
  }

  // ✅ Validação de senha forte
  function validarSenhaForte(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(senha);
  }

  botao.addEventListener("click", (e) => {
    e.preventDefault();

    const nome = document.querySelector(".n2").value.trim();
    const usuario = document.querySelector(".u2").value.trim();
    const email = document.querySelector(".em2").value.trim();
    const confirmarEmail = document.querySelector(".cem2").value.trim();
    const senha = document.querySelector(".s2").value.trim();
    const confirmarSenha = document.querySelector(".cs2").value.trim();
    const telefone = document.querySelector(".t2").value.trim();
    const cpf = document.querySelector(".c2").value.trim();
    const rg = document.querySelector(".r2").value.trim();
    const endereco = document.querySelector(".e2").value.trim();
    const dataNasc = document.querySelector(".d2").value.trim();
    const genero = document.querySelector(".g2").value;

    erroContainer.textContent = "";
    erroContainer.style.display = "none";

    if (!nome) return exibirErro("Por favor, preencha o nome.");
    if (!/^[A-Za-zÀ-ú\s]{3,50}$/.test(nome)) return exibirErro("Nome inválido. Use apenas letras e espaços (3-50 caracteres).");

    if (!usuario) return exibirErro("Por favor, preencha o usuário.");
    if (!/^[A-Za-z0-9_]{3,20}$/.test(usuario)) return exibirErro("Usuário inválido. Use letras, números ou underscore (3-20 caracteres).");

    if (!email || !validarEmail(email)) return exibirErro("Email inválido.");
    if (email !== confirmarEmail) return exibirErro("O email tem que ser igual ao do campo de confirmação");

    if (!senha) return exibirErro("Por favor, preencha a senha.");
    if (!validarSenhaForte(senha)) {
      return exibirErro("A senha deve ter no mínimo 8 caracteres e conter pelo menos: uma letra maiúscula, uma minúscula, um número e um caractere especial.");
    }
    if (senha !== confirmarSenha) return exibirErro("A senha tem que ser igual ao do campo de confirmação");

    if (!telefone) return exibirErro("Por favor, preencha o telefone.");
    if (!/^\d{8,11}$/.test(telefone)) return exibirErro("Telefone inválido. Use entre 8 e 11 números.");

    if (!cpf) return exibirErro("Por favor, preencha o CPF.");
    if (!validarCPF(cpf)) return exibirErro("CPF inválido. Deve conter 11 dígitos numéricos.");

    if (!rg) return exibirErro("Por favor, preencha o RG.");
    if (!validarRG(rg)) return exibirErro("RG inválido. Deve conter entre 7 e 9 dígitos numéricos.");

    if (!endereco) return exibirErro("Por favor, preencha o endereço.");
    if (endereco.length < 5) return exibirErro("Endereço muito curto. Mínimo 5 caracteres.");

    if (!dataNasc) return exibirErro("Por favor, preencha a data de nascimento.");
    if (!validarDataNascimento(dataNasc)) return exibirErro("Data de nascimento inválida. Use formato dd/mm/aaaa e não pode ser no futuro.");

    if (!genero) return exibirErro("Por favor, selecione seu gênero.");

    // ✅ Armazenar no localStorage
    localStorage.setItem("cadastro_nome", nome);
    localStorage.setItem("cadastro_usuario", usuario);
    localStorage.setItem("cadastro_email", email);
    localStorage.setItem("cadastro_senha", senha);
    localStorage.setItem("cadastro_telefone", telefone);
    localStorage.setItem("cadastro_cpf", cpf);
    localStorage.setItem("cadastro_rg", rg);
    localStorage.setItem("cadastro_endereco", endereco);
    localStorage.setItem("cadastro_data_nascimento", dataNasc);
    localStorage.setItem("cadastro_genero", genero);

    // Redireciona para a próxima página
    window.location.href = "aba-cadastro-do-usuario-etapa-2-autenticacao-dois-fatores.html";
  });
});
