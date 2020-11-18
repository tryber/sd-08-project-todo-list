let TodosItems = []
function criaItem() {

    let item = document.getElementById('texto-tarefa').value
    document.getElementById('texto-tarefa').value = ''
    if (item == '') {
        alert('Campo vazio')
    }
    else {
        TodosItems.push(`
        <li id="${item}" onclick="selectItem(${item})">${item}</li>
    `)

        TodosItemsFormatado = TodosItems.join("")

        document.getElementById('lista-tarefas').innerHTML = TodosItemsFormatado
    }
}

function selectItem(item){
    console.log(item)
}