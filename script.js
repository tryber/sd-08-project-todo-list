function criabotao(){
    let getposi = document.querySelector("#botao")
    let criabot =document.createElement("button")
    criabot.id = "criar-tarefa"
    criabot.innerHTML = "Adicionar"
    getposi.appendChild(criabot)
    let getposi2 = document.getElementById("texto-tarefa")
    let getposi1 = document.querySelector("#lista-tarefas")
    

    criabot.addEventListener("click", function(){
        let textoinput = getposi2.value

        
        let criaelista = document.createElement("li")
        criaelista.innerText =  textoinput
        getposi1.appendChild(criaelista)




    })



}
criabotao()



function hightlightelement(){


let getposi3 = document.querySelectorAll("#lista-tarefas")


for(let i = 0 ; i < getposi3.length ; i ++){
    
    
    getposi3[i].addEventListener("click",function(){

        

getposi3[i].style.backgroundColor ="rgb(128,128,128)"


    })
}


}

hightlightelement()

/*
function criaitemlista(){

    let getposi1 = document.querySelector("#lista-tarefas")
    let criaelista = document.createElement("li")
    criaelista.innerHTML =  "ze"
    getposi1.appendChild(criaelista)
}

criaitemlista()

*/