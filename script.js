let TodosItems = []
let oldSelect = ''
let TodosItemsFormatado  = []
let finalizados = []

//Esta função renderiza quase todas as outras funções
function render(){
   let lista = document.getElementById('lista-tarefas')
    
    for(i=0; i < TodosItems.length; i++){
        console.log
        TodosItemsFormatado.push(`
        <li id="${TodosItems[i]}" onclick="selectItem('${TodosItems[i]}')" ondblclick="duploClick('${TodosItems[i]}')">${TodosItems[i]}</li>
        `)
    }
    TodosItemsFormatado = TodosItemsFormatado.join("")
    lista.innerHTML = TodosItemsFormatado
    TodosItemsFormatado = []


}

function aoAbrir(){
    if(localStorage.getItem('lista')){
        lista = localStorage.getItem('lista').split(',')
        for(i=0; i< lista.length; i++){
          TodosItems.push(lista[i])
        }
       render()
    }
   
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
    localStorage.setItem('lista', TodosItems )

    if(TodosItems == ''){
        localStorage.setItem('lista', '')
    }

}

function duploClick(id){
    item = document.getElementById(id)
    item.classList.toggle('completed')
    TodosItems.splice(TodosItems.indexOf(id), 1)
    console.log(TodosItems)
}

function apagaTudo(){
    document.getElementById('lista-tarefas').innerHTML = ''
    TodosItems = []
    render()
}

function Finalizadosfun(){
    render()
}