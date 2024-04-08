var aluno = "ana";
var aluno = "pedro"

//vetores e listas => arrays
//criando
var alunos = ["ana", "pedro", "maria"];

//lendo
console.log(alunos[1]);

//alterando
alunos[0] = "anna";

//adicionando no fim
alunos.push("lulu");

//adicionando ao começo
alunos.unshift("Mario");

function listar()
{
    var alunos = ["Ana", "pedro", "maria"];
    

    res.innerHTML = alunos[0] + "<br>";
    res.innerHTML = res.innerHTML + alunos[1] + "<br>";
    res.innerHTML = res.innerHTML + alunos[2] + "<br>";
     var  ult = alunos.length - 1;
    for ( var ini=0; ini < ult; ini += 1)
    {
        res.innerHTML += alunos[ini] + "<br>";

    }

}

