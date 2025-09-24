document.addEventListener('DOMContentLoaded', function () {
  const elementos = ["pix", "boleto", "credito"];
  const planoSelect = document.getElementById('planossel');
  const botao = document.getElementById('prosseguirBtn');

  if (!planoSelect || !botao) {
    console.error("Elementos necessários não encontrados!");
    return;
  }

  // Salva plano selecionado ao mudar o select
  planoSelect.addEventListener('change', function () {
    localStorage.setItem("planoSelecionado", planoSelect.value);
  });

  elementos.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    el.addEventListener('click', function () {
      // Remove borda de todos e seta localStorage dos elementos para false
      elementos.forEach(i => {
        const elem = document.getElementById(i);
        if (elem) {
          elem.classList.remove("borda-ativa");
          elem.classList.remove("sem-borda");
        }
        localStorage.setItem(i, "false"); // seta false para todos no localStorage
      });

      // Ativa clicado
      this.classList.add("borda-ativa");

      // Marca os outros como sem-borda
      elementos.filter(i => i !== this.id).forEach(i => {
        const other = document.getElementById(i);
        if (other) other.classList.add("sem-borda");
      });

      // Salva no localStorage qual forma foi selecionada (apenas o id da selecionada)
      localStorage.setItem("formaSelecionada", this.id);

      // Marca a forma selecionada como true no localStorage
      localStorage.setItem(this.id, "true");
    });
  });

  botao.addEventListener('click', function () {
    const plano = planoSelect.value;

    const formaSelecionadaVisual = elementos.some(id => {
      const elem = document.getElementById(id);
      return elem && elem.classList.contains("borda-ativa");
    });

    const formaSelecionadaStorage = localStorage.getItem("formaSelecionada");

    if ((plano === "men" || plano === "anu") && formaSelecionadaVisual && formaSelecionadaStorage) {
      window.location.href = 'aba-ativacao-plano-pagamento-etapa-2-situacao-plano.html';
    } else {
      alert("Por favor, selecione um plano e uma forma de pagamento.");
    }
  });
});
