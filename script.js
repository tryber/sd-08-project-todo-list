let TodosItems = []
let ordem = []
let oldSelect = ''
let TodosItemsFormatado  = []
let finalizados = []
let finalizadosFormatados = []



//Esta função renderiza quase todas as outras funções
function render(){
   let lista = document.getElementById('lista-tarefas')

    for(i=0; i < ordem.length; i++){
        for(y=0; y < TodosItems.length; y++){
            if(ordem[i] === TodosItems[y]){
                console.log(TodosItems[y])
                TodosItemsFormatado.push(`
                <li id="${TodosItems[y]}" onclick="selectItem('${TodosItems[y]}')" ondblclick="duploClick('${TodosItems[y]}')">${TodosItems[y]}</li>
                `)
            }
        }
        for(y=0; y < finalizados.length; y++){
            if(ordem[i] === finalizados[y]){
                TodosItemsFormatado.push(`<li id="${finalizados[y]}" onclick="selectItem('${finalizados[y]}')" class="completed" ondblclick="duploClick('${finalizados[y]}')">${finalizados[y]}</li>`)  
            }
        }
    }
    
    TodosItemsFormatado = TodosItemsFormatado.join("")
    lista.innerHTML = TodosItemsFormatado
    TodosItemsFormatado = []

   


}

function aoAbrir(){

    if(localStorage.getItem('ordem')){
        ordem1 = localStorage.getItem('ordem').split(',')
        for(i=0; i< ordem1.length; i++){
          ordem.push(ordem1[i])
        }}

    if(localStorage.getItem('lista')){
        lista = localStorage.getItem('lista').split(',')
        for(i=0; i< lista.length; i++){
          TodosItems.push(lista[i])
        }}

    if(localStorage.getItem('finalizados')){
        finaliz= localStorage.getItem('finalizados').split(',')
        for(i=0; i< finaliz.length; i++){
            finalizados.push(finaliz[i])
        }}
       render()
    
   
}
aoAbrir()

function criaItem() {

    let item = document.getElementById('texto-tarefa').value
    document.getElementById('texto-tarefa').value = ''
    if (item == '') {
        alert('Campo vazio')
    }
    else {
        TodosItems.push(item)
        ordem.push(item)

        render()
    }
}


function selectItem(item){
    itemSelecionado = document.getElementById(`${item}`)

    if(oldSelect != ''){
        oldSelect.classList.remove('select-item')
    }
    
    itemSelecionado.classList.add('select-item')
    oldSelect = itemSelecionado
}

function salvar(){
    localStorage.setItem('ordem', ordem )
    localStorage.setItem('lista', TodosItems )

    if(TodosItems == ''){
        localStorage.setItem('lista', '')
    }

    localStorage.setItem('finalizados', finalizados)

}

function duploClick(id){
    item = document.getElementById(id)
    item.classList.toggle('completed')
    TodosItems.splice(TodosItems.indexOf(id), 1)
    finalizados.push(id)
   
}

function apagaTudo(){
    document.getElementById('lista-tarefas').innerHTML = ''
    TodosItems = []
    
    render()
}

function Finalizadosfun(){
    finalizados = []
    render()
}