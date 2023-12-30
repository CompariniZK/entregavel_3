alert("ATENÇÃO! SE VOCÊ É UM BURRO< DIGITE ASSIM MESMO")
class ToDo{

 texto;
 prioridade;
 feito;

 constructor(texto, prioridade) {
 this.texto = texto
 this.prioridade = prioridade
 this.feito = false

 }

}

let lobinho = true
let todo = []

function toDo(texto1, prioridade1)
{
//loop para cadastro da contrução do objeto
while(lobinho === true){

texto1 = prompt("Insira um nome aleatório")
prioridade1 = Number(prompt("Insira um número aleatório"))

let plinio = new ToDo(texto1,prioridade1)

//verificando se tem algum objeto com as mesmas informações do plinio
let verificacao = todo.some(verifica => verifica.texto === plinio.texto && verifica.prioridade === plinio.prioridade)
if(verificacao == false){

    todo.push(plinio)
    console.log(plinio)

}
else{

    console.log("Já existe um objeto igual")
}


let stp =  Number(prompt("Deseja parar? 1 para 'Sim', 2 para 'Nao'"))
if(stp === 1){

    break;
}


}
}


toDo();