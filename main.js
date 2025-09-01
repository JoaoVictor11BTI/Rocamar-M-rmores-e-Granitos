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