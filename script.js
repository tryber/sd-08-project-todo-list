let TodosItems = []
let oldSelect = ''
let TodosItemsFormatado 
let finalizados = []

function aoAbrir(){
    if(localStorage.getItem('lista')){
        TodosItems.push(localStorage.getItem('lista'))
        
        TodosItemsFormatado = TodosItems.join("")
    
        document.getElementById('lista-tarefas').innerHTML = TodosItemsFormatado
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
        TodosItems.push(`
        <li id="${item}" onclick="selectItem('${item}')" ondblclick="duploClick('${item}')">${item}</li>
    `)

        TodosItemsFormatado = TodosItems.join("")

        document.getElementById('lista-tarefas').innerHTML = TodosItemsFormatado
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
    localStorage.setItem('lista', TodosItemsFormatado )

}

function duploClick(id){
    item = document.getElementById(id)
    item.classList.toggle('completed')
    
    finalizados.push(id)
}

function apagaTudo(){
    document.getElementById('lista-tarefas').innerHTML = ''
    TodosItems = []
}

function Finalizadosfun(){
    for(i=0; i< finalizados.length; i++){
        document.getElementById(finalizados[i]).remove()
    }
    
    
}