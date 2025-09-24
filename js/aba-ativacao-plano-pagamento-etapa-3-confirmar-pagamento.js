const elementos = ["pix", "boleto", "credito"];

const containersMap = {
  pix: "containerpix",
  boleto: "containerbo",
  credito: "containercre"
};

window.addEventListener("DOMContentLoaded", function () {
  elementos.forEach(id => {
    const el = document.getElementById(id);
    const containerId = containersMap[id];
    const containerEl = document.getElementById(containerId);
    const ativo = localStorage.getItem(id) === "true";

    if (ativo) {
      el.style.display = "flex";
      if (containerEl) containerEl.style.display = "flex";
    } else {
      el.style.display = "none";
      if (containerEl) containerEl.style.display = "none";
    }
  });
});
