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
let plinio = 0

function toDo(texto1, prioridade1)
{
//loop para cadastro da contrução do objeto
while(lobinho === true){

texto1 = prompt("Insira um nome aleatório")
prioridade1 = Number(prompt("Insira um número aleatório"))

 plinio = new ToDo(texto1,prioridade1)

//verificando se tem algum objeto com as mesmas informações do plinio
let verificacao = todo.some(verifica => verifica.texto === plinio.texto && verifica.prioridade === plinio.prioridade)
if(verificacao == false){

    todo.push(plinio)
    console.log(plinio)
    console.log(todo)

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


let allTexts = []


function atualizarToDo(textoAntigo, textoNovo){

textoAntigo = prompt("Digite o nome que deseja atualizar no cadastro:")
textoNovo = prompt("Digite o novo nome:")

let verificacao2 = todo.findIndex(verifica => verifica.texto === textoAntigo)
if(verificacao2 !== -1){

  todo[verificacao2].texto = textoNovo
  console.log("Atualizado com sucesso")
  console.log(todo)




}
else{

console.log("Erro de ao atualizar, tente novamente")


}
}
let arrayConcluir = []

function ConcluirToDo (textinho)

{

textinho = prompt("Insira um nome: ")

let verifica3 = todo.findIndex(verifica => verifica.texto === textinho)
if(verifica3 !== -1 )
{

todo[verifica3].feito = true
return true;
}

else{

  return false;
}
}

function ExcluirToDo(textinho2){

textinho2 = prompt("Digite um nome de cadastro para excluir:")
let verifica4 = todo.findIndex(verifica => verifica.texto === textinho2)

if(verifica4 !== -1){

todo.splice(verifica4, 1)
return true;

} 
else
{

  return false;


}
}




