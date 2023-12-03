let titulo = document.querySelector('h1');
titulo.innerHTML='Hora do desafio';

function verificarConsole() {
    console.log('O botão (console) foi clicado')
}

function verificarAlert() {
    alert('Eu amo JS')
}

function verificarPrompt() {
    cidade = prompt('Digite o nome da cidade que mais gosta')
    alert(`Fui a ${cidade} e lembrei de você`)
}

function verificarSoma() {
    n1 = parseInt(prompt('Digite o primeiro número:'))
    n2 = parseInt(prompt('Digite o segundo número'))
    soma = n1 + n2
    alert(`O resultado é ${soma}`)
}