console.log("escreve no console!");
//var idade = prompt("Qual a sua idade?");
var idade = 20;
if(idade >= 18) 
{
    console.log("É maior de idade");
}
else
{
    console.log("Não é maior de idade");
}

//var num1 = prompt("digite o primeiro numero");
//var num2 = prompt("digite o segundo número");

if(num1==num2)
{
    console.log("os dois são iguais")
}

else if (num1>num2)
{
    console.log("o número 1 e maior");
}
else
{
    console.log("o número 2 é o maior");
}


//var n1 = prompt("digite o primeiro numero");
//var n2 = prompt("digite o segundo numero");
//var n3 = prompt ("digite o terceiro numero");

if (n1>n2)
{
    console.log("o numero 1 é maior");
}
else if (n2>n3)
{
    console.log("o numero 3 e o menor");
}
//metodo de fazer


var n1 = prompt("digite o primeiro numero");
var n2 = prompt("digite o segundo numero");
var n3 = prompt ("digite o terceiro numero");

if(n1 > n2)
{
    if(n1 > n3)
    {
        console.log("o numero " + n1 + "é o maior!");
    }
    else
    {
        console.log("o numero" + n3 + "é o maior")
    }
}
else
{
    if(n2 > n3)
    {
        console.log("o numero" + n2 + "é maior!");
    }
    else
    {
        console.log("o numero" + n3 + "é maior");
    }
}