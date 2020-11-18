function addTarefa() {
    let texto = document.querySelector("#texto-tarefa")
    let lista = document.querySelector("#lista-tarefas")
    let criar = document.querySelector("#criar-tarefa")

    criar.addEventListener('click', function() {
    let li = document.createElement('li')
    li.innerHTML = texto.value
    lista.appendChild(li)
    lista.next;
    texto.value = null
    })
}
addTarefa();

function addCor() {
    let lista = document.querySelector("#lista-tarefas")
    lista.addEventListener('click', function(event) {
    let selected = document.querySelector('.selected')
    if (selected == null) {
        event.target.classList.add('selected')
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    } else {
        selected.classList.remove('selected')
        selected.style.backgroundColor = ''
        event.target.classList.add('selected')
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    }
    })
}
addCor()

function limparTudo() {
    let btnLimpar = document.querySelector('#apaga-tudo')
    btnLimpar.addEventListener('click', function() {
        let lista = document.querySelector('#lista-tarefas')
        lista.innerHTML = ''
    })
}
limparTudo()

function limparTarefa() {
    let btnLimparTarefa = document.querySelector('#remover-finalizados')
    btnLimparTarefa.addEventListener('click', function() {
        let lista = document.querySelector('#lista-tarefas')
        for (let i = 0; i < lista.children.length; i++) {
            if (lista.children[i].classList.contains('completed')) {
                lista.removeChild(lista.children[i])
                i -= 1
            }
        }
    })
}
limparTarefa()


/*let addTaskButton = document.querySelector('#criar-tarefa')
let taskInput = document.querySelector('#texto-tarefa')
let taskList = document.querySelector('#lista-tarefas')
let lastSelectedElement = null

addTaskButton.addEventListener("clik", createTask)

function createTask() {
    let listItem = document.createElement('li')
    listItem.innerText = taskInput.value
    listItem.addEventListener("clik", setSelectedColor)
    taskList.appendChild(listItem)
    taskInput.value = ""

}

function setSelectedColor(event) {
    if (lastSelectedElement !== null || lastSelectedElement === event) {
        lastSelectedElement.style.backgroundColor = "white"
    }
    latsSelectedElement = event.target
    event.target.style.backgroundColor = "rgb(128, 128, 128)"

}*/