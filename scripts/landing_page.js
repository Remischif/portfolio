const notYet = "Ça n'existe pas voyons !";

function notExist() {
    const btn = document.getElementsByClassName("cta-button")[0];
    const original = btn.innerHTML;
    btn.innerHTML = notYet;
    setTimeout(() => {
        btn.innerHTML = original;
    }, 2000);
}