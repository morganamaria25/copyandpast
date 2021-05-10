const copy = document.querySelector("#copy");

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

function gerarNumero() {
    var gerarNumeroNaTela = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    document.querySelector('#exibeNumero').innerHTML = gerarNumeroNaTela;
    copyToClipboard(gerarNumeroNaTela);
}

