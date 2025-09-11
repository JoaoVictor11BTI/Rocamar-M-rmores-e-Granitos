/* === CARREGAMENTO AO ENTRAR === */

const MIN_TIME = 1350;
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    const startTime = performance.timing.navigationStart;
    const elapsed = Date.now() - startTime;
    const remaining = MIN_TIME - elapsed;

    setTimeout(() => {
        document.body.classList.add("loaded");

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);
    }, remaining > 0 ? remaining : 0);
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navegacao = document.querySelector('.navegacao');
  if (menuToggle && navegacao) {
    menuToggle.addEventListener('click', function () {
      navegacao.classList.toggle('active');
    });
  }
});