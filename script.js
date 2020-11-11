let buttongraber = document.getElementById("criar-tarefa")
let inputfield = document.getElementById('texto-tarefa')
let container = document.getElementsByClassName("container")
let listadetarefas = document.getElementById('lista-tarefas')
let completed = document.getElementsByClassName ('.completed')
function todo() {
buttongraber.addEventListener('click', function(){
    let paragrafo = document.createElement('li')
    paragrafo.innerText=inputfield.value
    paragrafo.id = ('color')
    listadetarefas.appendChild(paragrafo)
    inputfield.value=''
    paragrafo.addEventListener('click', function(event){
        // if(event.target.style.backgroundColor !== 'rgb(128, 128, 128)'){
        // event.target.style.backgroundColor ='rgb(128, 128, 128)'
        // } 
        // if (event.className ="colorgray"){
        //     paragrafo.classList.remove('colorgray')
        //     event.target.className ="colorgray"
        // }
     paragrafo.addEventListener('dblclick', function(event){
      event.target.classList.toggle("completed")
            })
  
        })
           })
        }
        todo()

           let paragrafo = document.createElement('li')

           function selecionado (){
            for ( let index =0; index < paragrafo.length; index+=1) {
                const addcor = colorsItens[index]
        
                addcor.addEventListener('click', function(event){
                    const selected = document.querySelector('.colorgray')
                if ( addcor.id ==='color'){
                        selected.classList.remove('color')
                        event.target.className='colorgray'
                    }
        
                })
        
            }
        }
        
        selecionado()