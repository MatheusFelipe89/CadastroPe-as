const listaDePecas = ["Bico de injeçâo", "Motor", "Amortecedor"]

console.log(listaDePecas)

if(listaDePecas.length < 10) {
    console.log("É possivel cadastrar mais peças")
} else {
    console.log ("Não há mais espaço na lista")
}

var peso = 100;

if (peso >= 100) {
    console.log("Peso da peça adequado");
} else {
    console.log("Peso insulficiente")
}

let NomePeca = "Disco de Freio"

if (NomePeca.length > 3) {
    console.log("Nome adequado!")
    } else if(NomePeca.length == 0) {
        console.log("O nome não pode ser vazio")
} else {
    console.log("O nome deve possuir mais de 3 caracteres")
}

switch (NomePeca.length) {
    case 0:
        console.log("O nome não pode ser vazio")
        break;


    case 1:
    case 2:
    case 3:
        console.log("O nome deve possuir mais de 3 caracteres!")
        break;
   
        default:
        console.log("Nome adequado!")
        break;
}