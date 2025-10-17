const icone1 = document.getElementById('alternar-tema-btn');
const icone2 = document.getElementById('alternar-tema2-btn');
const imagem1 = document.getElementById('imagem-logo')
const imagem2 = document.getElementById('imagem-logo2')
let temaAtual = 'claro';

document.body.classList.add('tema-claro');

function alternarTema() {
    const body = document.body;
    if(temaAtual === 'claro') {
        body.classList.remove('tema-claro');
        body.classList.add('tema-escuro');
        temaAtual = 'escuro';
    } else {
        body.classList.remove('tema-escuro');
        body.classList.add('tema-claro');
        temaAtual = 'claro';
    }
}
icone1.addEventListener("click", () => {
    alternarTema();
    icone1.style.display = "none";
    imagem1.style.display = "none";
    icone2.style.display = "inline";
    imagem2.style.display = "inline";
});

icone2.addEventListener("click", () => {
    alternarTema();
    icone2.style.display = "none";
    imagem2.style.display = "none";
    icone1.style.display = "inline";
    imagem1.style.display = "inline";
});