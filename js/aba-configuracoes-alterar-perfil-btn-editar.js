const botao = document.getElementById('bu1');
const botaoDesfazer = document.getElementById('bu2'); // Botão desfazer

let editar = false; // Armazenar valores originais dos campos antes da edição
let dadosOriginais = {}; // Valores originais
let codigoSimulado = ''; // Código de confirmação

const campos = {
  n2: 'cadastro_nome',
  u2: 'cadastro_usuario',
  ttt2: 'cadastro_telefone',
  r2: 'cadastro_rg',
  e2: 'cadastro_endereco',
  d2: 'cadastro_data_nascimento',
  g2: 'cadastro_genero'
};

// Validação dos campos
function validarCampos() {
  const nome = document.querySelector('.n2').value.trim();
  const usuario = document.querySelector('.u2').value.trim();
  const telefone = document.querySelector('.ttt2').value.trim();
  const rg = document.querySelector('.r2').value.trim();
  const endereco = document.querySelector('.e2').value.trim();
  const dataNascimento = document.querySelector('.d2').value.trim();
  const genero = document.querySelector('.g2').value;

  if (!nome) return 'O nome é obrigatório.';
  if (!/^[A-Za-zÀ-ú\s]{3,50}$/.test(nome)) {
    return 'Nome inválido. Use apenas letras e espaços, entre 3 e 50 caracteres.';
  }
  if (!usuario) return 'O usuário é obrigatório.';
  if (!/^[A-Za-z0-9_]{3,20}$/.test(usuario)) {
    return 'Usuário inválido. Use letras, números ou underscore, entre 3 e 20 caracteres.';
  }
  if (!telefone) return 'O telefone é obrigatório.';
  if (!/^\d{8,11}$/.test(telefone)) {
    return 'Telefone inválido. Use entre 8 e 11 números.';
  }

  const rgLimpo = rg.replace(/[^\d]/g, '');
  if (!rgLimpo) return 'O RG é obrigatório.';
  if (!/^\d{7,9}$/.test(rgLimpo)) {
    return 'RG inválido. Deve conter entre 7 e 9 dígitos numéricos.';
  }

  if (!endereco) return 'O endereço é obrigatório.';
  if (endereco.length < 5) {
    return 'Endereço muito curto. Mínimo 5 caracteres.';
  }

  if (!dataNascimento) return 'A data de nascimento é obrigatória.';
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataNascimento)) {
    return 'A data de nascimento deve estar no formato dd/mm/aaaa.';
  }

  const [diaStr, mesStr, anoStr] = dataNascimento.split('/');
  const dia = Number(diaStr);
  const mes = Number(mesStr);
  const ano = Number(anoStr);
  const dataObj = new Date(`${ano}-${mes}-${dia}`);
  const hoje = new Date();

  if (
    isNaN(dataObj.getTime()) ||
    dataObj > hoje ||
    ano < 1900 ||
    dia < 1 || dia > 31 ||
    mes < 1 || mes > 12
  ) {
    return 'Data de nascimento inválida ou no futuro.';
  }

  if (!genero || genero === '') {
    return 'O gênero deve ser selecionado.';
  }

  return '';
}

// Alerta simples (sem campo de código)
function mostrarAlerta(mensagem) {
  const alertBox = document.querySelector('.alert-box');
  alertBox.innerHTML = ''; // limpa conteúdo anterior
  alertBox.innerHTML = `
    <p id="alert-message">${mensagem}</p>
    <button onclick="closeAlert()">OK</button>
  `;
  document.getElementById('custom-alert').classList.remove('hidden');
}

// Alerta com código de confirmação
function mostrarAlertaComCodigo(mensagem) {
  const alertBox = document.querySelector('.alert-box');
  alertBox.innerHTML = `
    <p id="alert-message">${mensagem}</p>
    <input type="text" id="codigo-confirmacao" placeholder="Digite o código de 6 dígitos">
    <button onclick="confirmarAlteracao()">Confirmar</button>
    <button onclick="simularCodigo()">Simular</button>
    <button onclick="closeAlert()">Cancelar</button>
  `;
  document.getElementById('custom-alert').classList.remove('hidden');
}

// Fechar alerta
function closeAlert() {
  document.getElementById('custom-alert').classList.add('hidden');
  document.querySelector('.alert-box').innerHTML = ''; // limpa qualquer conteúdo antigo
}

// ✅ Confirmar alteração com validação de 6 dígitos e origem do botão simular
function confirmarAlteracao() {
  const codigo = document.getElementById('codigo-confirmacao').value.trim();

  // Verifica se tem 6 dígitos numéricos E se é igual ao gerado
  if (!/^\d{6}$/.test(codigo) || codigo !== codigoSimulado) {
    mostrarAlertaComCodigo('Código inválido.');
    return;
  }

  salvarDados();
  closeAlert();
  definirModo(false);
  botao.textContent = 'ALTERAR';
  editar = false;
  botaoDesfazer.style.display = 'none';
}

// Simular código
function simularCodigo() {
  codigoSimulado = gerarCodigoAleatorio();
  document.getElementById('codigo-confirmacao').value = codigoSimulado;
}

// Gerar código aleatório
function gerarCodigoAleatorio() {
  let codigo = '';
  for (let i = 0; i < 6; i++) {
    codigo += Math.floor(Math.random() * 10);
  }
  return codigo;
}

// Carregar dados
function carregarDados() {
  for (const classe in campos) {
    const valor = localStorage.getItem(campos[classe]) || "";
    const elemento = document.querySelector(`.${classe}`);
    if (elemento) {
      elemento.value = valor;
    }
  }
}

// Salvar dados
function salvarDados() {
  for (const classe in campos) {
    const elemento = document.querySelector(`.${classe}`);
    if (elemento) {
      localStorage.setItem(campos[classe], elemento.value);
    }
  }
}

// Alternar modo edição
function definirModo(editar) {
  for (const classe in campos) {
    const elemento = document.querySelector(`.${classe}`);
    if (elemento) {
      if (elemento.tagName.toLowerCase() === 'select') {
        elemento.disabled = !editar;
      } else {
        elemento.readOnly = !editar;
      }
      if (editar) {
        elemento.classList.add('edit-mode');
      } else {
        elemento.classList.remove('edit-mode');
      }
    }
  }
}

// Desfazer alterações
function desfazerAlteracoes() {
  for (const classe in campos) {
    const elemento = document.querySelector(`.${classe}`);
    if (elemento) {
      elemento.value = dadosOriginais[classe];
    }
  }
  botaoDesfazer.style.display = 'none';
  definirModo(false);
  botao.textContent = 'ALTERAR';
  editar = false;
}

// Evento do botão principal (ALTERAR / SALVAR)
botao.addEventListener('click', () => {
  if (!editar) {
    // Entrar no modo edição
    for (const classe in campos) {
      const elemento = document.querySelector(`.${classe}`);
      if (elemento) {
        dadosOriginais[classe] = elemento.value;
      }
    }
    definirModo(true);
    botao.textContent = 'SALVAR';
    editar = true;
    botaoDesfazer.style.display = 'inline-block';
  } else {
    // Validar antes de salvar
    const erro = validarCampos();
    if (erro) {
      mostrarAlerta(erro);
      return;
    }

    let camposAlterados = false;
    for (const classe in campos) {
      const elemento = document.querySelector(`.${classe}`);
      if (elemento && elemento.value !== dadosOriginais[classe]) {
        camposAlterados = true;
        break;
      }
    }

    if (camposAlterados) {
      mostrarAlertaComCodigo('Alteração detectada. Digite o código de confirmação. Enviado no seu email');
      return;
    }

    // Sem alterações → apenas salva normalmente
    salvarDados();
    definirModo(false);
    botao.textContent = 'ALTERAR';
    editar = false;
    botaoDesfazer.style.display = 'none';
  }
});

// Evento do botão "Desfazer alterações"
botaoDesfazer.addEventListener('click', desfazerAlteracoes);
