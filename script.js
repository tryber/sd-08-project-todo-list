let buttongraber = document.getElementById("criar-tarefa")
let inputfield = document.getElementById('texto-tarefa')
let container = document.getElementsByClassName("container")
let listadetarefas = document.getElementById('lista-tarefas')
let completed = document.getElementsByClassName ('.completed')
function todo() {
buttongraber.addEventListener('click', function(){
    let paragrafo = document.createElement('li')
    paragrafo.innerText=inputfield.value
    paragrafo.classList.add('color')
    listadetarefas.appendChild(paragrafo)
    inputfield.value=''
    paragrafo.addEventListener('click', function(event){
      event.target.className ='colorgray'
     
            })
    paragrafo.addEventListener('dblclick', function(event){
     event.target.classList.toggle("completed")
        })
           })
        }
        todo()

        //    let paragrafo = document.createElement('li')

        //    function selecionado (){
        //     for ( let index =0; index < paragrafo.length; index+=1) {
        //         const addcor = colorsItens[index]
        
        //         addcor.addEventListener('click', function(event){
        //             const selected = document.querySelector('.colorgray')
        //         if ( addcor.className ==='color'){
        //                 selected.classList.remove('selected')
        //                 event.target.className='colorgray'
        //             }
        
        //         })
        
        //     }
        // }
        
        // selecionado()