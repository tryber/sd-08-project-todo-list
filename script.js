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
        let textoinput =getposi2.value

        
        let criaelista = document.createElement("li")
       
        
            criaelista.innerText = textoinput

            getposi2.value = ""

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

let criabotaoapaga = document.createElement("button")
criabotaoapaga.id = "apaga-tudo"
criabotaoapaga.innerText = "Apagar tudo"
getposi4.appendChild(criabotaoapaga)

criabotaoapaga.addEventListener("click", function(event){
    let pegalista1 = document.querySelector("li")
    let getposi1 = document.querySelector("#lista-tarefas")
    console.log(getposi1)
    // getposi1.removeChild(pegalista1)
    getposi1.innerHTML = " "

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


function removetarefas(){
    let pegaposidiv = document.querySelector("#remover-finalizadosdiv")
    let criaelementbotao = document.createElement("button")
    let getposi1 = document.querySelector("#lista-tarefas")
    criaelementbotao.id = "remover-finalizados"
    criaelementbotao.innerText = "Remover Finalizados"

    pegaposidiv.appendChild(criaelementbotao)
   

// pega a lista depois de clicar e atribui valor a ela
    criaelementbotao.addEventListener("click",function(event){ 
        let pegalista = document.querySelectorAll("li")
        
//  passa em cada um dos elementos do array e verifica se possui a classe e deleta se tiver
for(let i = 0 ; i < pegalista.length ; i++)

        if(pegalista[i].className === "completed"){
            getposi1.removeChild(pegalista[i])
            

        }else{


        }

    })

}

removetarefas()



function botaosalvatarefas(){
    let pegaposidiv1 = document.querySelector("#botsalvadiv")
    let criabotaosalva = document.createElement("button")
    criabotaosalva.id = "salvar-tarefas"
    criabotaosalva.innerText = "Salvar Tarefas"
   

    pegaposidiv1.appendChild(criabotaosalva)


    criabotaosalva.addEventListener("click" , function(){
         let pegalista2 = document.querySelectorAll("li")

        for(let i = 0 ;i < pegalista2.length ;i++){

          let armazena = localStorage.JSON.stringify().setItem("listaelemento1",pegalista2[i] )
           console.log(armazena) 
  
        }

    })
}


botaosalvatarefas()



