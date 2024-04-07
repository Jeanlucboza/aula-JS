function soma(n1,n2)
{
    var resultado = n1 + n2;
    console.log(resultado);
    return resultado;
}
function somarInput()
{
    var n1 = num1.value;
    var n2 = num2.value;
    console.log(num1, num2);
    console.log(parseInt(n1) + parseInt(n2))

    res.value = resultado;
}

function par()
{
    var n1 = parseInt(num1.value);

    var resto = n1 % 2;

    if(resto == 0)
    {
        res.value = "Par";
    }
    else
    {
        res.value = "impar"
    }
}

function combustivel()
    {
        var gas = parseFloat(num1.value);
        var Alc = parseFloat(num2.value);

        var resultado = alc / gas;

        if (resultado >= 0.7)
        {
            res.value = "Gasolina"
        }
        else
        {
            res.value = "alcool"
        }
    }

