document.addEventListener("DOMContentLoaded", () => {
  const cc = document.querySelector(".b11 .cc");
  const fullText = cc.innerHTML;

  const phrases = fullText.split("/").map(s => s.trim());
  let index = 0;

  // Cria spans para cada caractere, substituindo espaços por &nbsp; para preservar espaçamento
  function createSpans(text) {
    const fragment = document.createDocumentFragment();
    const parts = text.split(/(<br\s*\/?>)/i);
    parts.forEach(part => {
      if (/^<br\s*\/?>$/i.test(part)) {
        fragment.appendChild(document.createElement("br"));
      } else {
        part.split("").forEach(char => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char; // substitui espaço normal por espaço não quebrável
          fragment.appendChild(span);
        });
      }
    });
    return fragment;
  }

  // Injeta keyframes blinkLetter (piscar)
  function addKeyframes() {
    if (!document.getElementById("blinkLetterStyle")) {
      const style = document.createElement("style");
      style.id = "blinkLetterStyle";
      style.textContent = `
        @keyframes blinkLetter {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Aplica piscar 1 vez com delay entre letras
  function applyBlinkAnimation(spans) {
    const animationDuration = 4; // segundos
    const delayStep = 0.1; // segundos

    spans.forEach((span, i) => {
      span.style.display = "inline-block";
      span.style.animation = `blinkLetter ${animationDuration}s linear 1`;
      span.style.animationFillMode = "forwards";
      span.style.animationDelay = `${i * delayStep}s`;
      span.style.filter = "none";
      span.style.opacity = "1";
      span.style.transition = "none";
      span.style.whiteSpace = "pre"; // garante espaços no span
    });

    return animationDuration * 1000 + (spans.length - 1) * delayStep * 1000;
  }

  // Sumir com blur + fade out suave, delay entre letras
  function blurFadeOut(spans, callback) {
    const duration = 600; // ms
    const delayStep = 80; // ms entre letras

    spans.forEach((span, i) => {
      setTimeout(() => {
        span.style.transition = `opacity ${duration}ms ease, filter ${duration}ms ease`;
        span.style.opacity = "0";
        span.style.filter = "blur(4px)";
      }, i * delayStep);
    });

    setTimeout(() => {
      callback();
    }, duration + delayStep * spans.length);
  }

  // Aparecer com fade-in + blur removido suave, delay entre letras
  function fadeInAppear(spans, callback) {
    const duration = 600; // ms
    const delayStep = 80; // ms entre letras

    spans.forEach((span, i) => {
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.filter = "blur(4px)";
      span.style.transition = `opacity ${duration}ms ease, filter ${duration}ms ease`;
      setTimeout(() => {
        span.style.opacity = "1";
        span.style.filter = "none";
      }, i * delayStep);
    });

    setTimeout(() => {
      callback();
    }, duration + delayStep * spans.length);
  }

  // Mostra frase com piscar, some com blur, depois chama callback
  function showPhraseCycle(text, done) {
    cc.innerHTML = "";
    const fragment = createSpans(text);
    cc.appendChild(fragment);
    const spans = Array.from(cc.querySelectorAll("span"));

    // Piscar
    const blinkTotal = applyBlinkAnimation(spans);

    setTimeout(() => {
      // Sumir suave
      blurFadeOut(spans, done);
    }, blinkTotal);
  }

  // Loop infinito
  function loop() {
    showPhraseCycle(phrases[index], () => {
      index = (index + 1) % phrases.length;

      cc.innerHTML = "";
      const fragment = createSpans(phrases[index]);
      cc.appendChild(fragment);
      const spans = Array.from(cc.querySelectorAll("span"));

      fadeInAppear(spans, () => {
        loop();
      });
    });
  }

  addKeyframes();
  loop();
});
