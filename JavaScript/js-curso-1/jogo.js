let chute;
let nummax = 100
let nsecreto = parseInt(Math.random() * nummax + 1);
let chances = 1;
let palavrachance = chances > 1 ? "chance" : "chances"; 

while (chute != nsecreto) {
    chute = prompt("Escreva um número de 1 a " + nummax);

    if(chute == nsecreto){
        alert("Você acertou em " + chances + "" + palavrachance)
        break
    }
    else{
        if(chute < nsecreto){
            alert("Chute mais alto!!")
        }
        if(chute > nsecreto){
            alert("chute mais baixo!!")

        }
    }
    chances++
}

 
