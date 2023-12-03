function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'coloque o seu peso e depois sua altura')

function verificarClique(a, b) {
    soma = a / (b*b)
    exibirTextoNaTela('h1', `O seu imc é ${soma}`)
}