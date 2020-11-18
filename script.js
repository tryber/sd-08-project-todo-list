let TodosItems = []
let oldSelect = ''
let TodosItemsFormatado 

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
        <li id="${item}" onclick="selectItem('${item}')">${item}</li>
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