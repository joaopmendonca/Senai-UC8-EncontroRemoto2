//Declaração de variaveis

// var - valores que podem ser alterados a qualquer momento, não é muito utilizado

//let - é mais seguro, por ser mais restrito.

//const - Constante

//Programa cadastra 10 itens em uma lista caso a lista seja menor que 10.

var listadePeca  = ["Filtro de Ar", "Motor", "Armotecedor"];
let nomePeca = "Disco de Freio"
let peso = 50;

if(listadePeca.length < 10)
{
    console.log("É possível cadastrar mais peças.");
}

else
{
    console.log("Não tem espaço na lista.");
}

if(peso < 100)
{
    console.log ("A peça deve pesar no mínimo 100g");
}

else
{
    console.log ("A peça possui peso adequado");
}

if(nomePeca.length > 3)
{
    console.log("O nome da peça está adequado para o cadastro!")
}

else if(nomePeca.length == 0)
{
    console.log("O nome da peça não pode ser vazio.")
}

else
{
    console.log ("O nome deve ter mais de 3 caracteres, digite um nome adequado!")
}


