let aberto = false;

function abrirMenu() {
    let menu = document.getElementById("sidebar");

    if (!aberto) {
        menu.style.left = "0";
        aberto = true;
    } else {
        menu.style.left = "-250px";
        aberto = false;
    }
}
