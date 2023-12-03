let listaGenerica = ["Rafa", "Pedra", "Franck"];

let listaDeProgramação = ["JavaScript", "C", "C+", "Kotlin", "Python"];

listaDeProgramação.push("Java", "Ruby", "GoLang");

console.log(listaDeProgramação);

console.log(listaGenerica); 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'coloque o seu peso e depois sua altura')

function verificarClique(a, b) {
    soma = a / (b*b)
    exibirTextoNaTela('h1', `O seu imc é ${soma}`)
}