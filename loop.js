function contagem()
{
    var inicio = 1;
    var fim = parseInt(num1.value);

    while(inicio <= fim)
    {
        res.value = res.value + " " + inicio + " ";
        inicio = inicio + 1;
    }
}
function decrescente()
{
    var inicio = parseInt(num1.value);
    var fim = 1;
    
    while(inicio<=fim)
    {
        res.value = res.value + " " + inicio + " ";
        inicio = inicio - 1;
    }
}
function fatorial()
{
    var inicio = parseInt(num1.value);
    var fim = 1;
    var total = 1;
    
    while(inicio <= fim)
    {
        total = total * inicio;
        inicio = inicio + 1;
    }
    res.value = total;
}
function fibonacci()
{
    var inicio = parseInt (num1.value);
    var fim = 1;
    var total = 1
}