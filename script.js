function criabotao(){

    let getposi = document.querySelector("#botao")
    let criabot =document.createElement("button")
    criabot.tagName = "criar-tarefa"
    criabot.innerHTML = "Adicionar"
    getposi.appendChild(criabot)

  let getposi2 = document.querySelector("#texto-tarefa")
    let getposi1 = document.querySelector("#lista-tarefas")
    let textoinput = getposi2.innerHTML

criabot.addEventListener("click", function(){

    
    let criaelista = document.createElement("li")
    criaelista.innerHTML =  textoinput
    getposi1.appendChild(criaelista)




})



}
criabotao()

/*
function criaitemlista(){

    let getposi1 = document.querySelector("#lista-tarefas")
    let criaelista = document.createElement("li")
    criaelista.innerHTML =  "ze"
    getposi1.appendChild(criaelista)
}

criaitemlista()

*/