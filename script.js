function criabotao(){
    let getposi = document.querySelector("#botao")
    let criabot =document.createElement("button")
    criabot.id = "criar-tarefa"
    criabot.innerHTML = "Adicionar"
    getposi.appendChild(criabot)
    let getposi2 = document.getElementById("texto-tarefa")
    let getposi1 = document.querySelector("#lista-tarefas")
    let lastselected = null

    criabot.addEventListener("click", function(){
        let textoinput = getposi2.value

        
        let criaelista = document.createElement("li")
       
        
            criaelista.innerText = textoinput

            getposi2.value = " "

            criaelista.addEventListener("click",function(event){

               if(lastselected === null){
                   lastselected = event.target

               }
               else{
                   lastselected.style.backgroundColor = "white"
                   lastselected = event.target
                   
               }
               event.target.style.backgroundColor = "rgb(128,128,128)"


             
                
            })
            criaelista.addEventListener("dblclick" , function(event){
                
               
               if(criaelista.className !== "completed" && criaelista.style.textDecoration !== "line-through"){

                event.target.className = "completed"
                
               }
               else{
                   event.target.classList.remove("completed")
                   

                
               }
               



            })
        
        getposi1.appendChild(criaelista)

     
    })



}
criabotao()

/*

let getposi3 = document.querySelectorAll("#lista-tarefas")

function hightlightelement(){

    


for(let i = 0 ; i < getposi3.length ; i ++){
    
    
    
    
    getposi3[i].addEventListener("click",function(){

        

getposi3[i].style.backgroundColor ="rgb(128,128,128)"


    })
}


}

hightlightelement()

*/


function botaoapaga(){

let getposi4 = document.querySelector("#botaoapaga")
let getposi5 = document.getElementsByClassName("li")
let criabotaoapaga = document.createElement("button")
criabotaoapaga.id = "apaga-tudo"
criabotaoapaga.innerText = "Apagar tudo"
getposi4.appendChild(criabotaoapaga)

criabotaoapaga.addEventListener("click", function(){

   

getposi5.length = 0

})


}
botaoapaga()

/*
function criaitemlista(){

    let getposi1 = document.querySelector("#lista-tarefas")
    let criaelista = document.createElement("li")
    criaelista.innerHTML =  "ze"
    getposi1.appendChild(criaelista)
}

criaitemlista()

*/