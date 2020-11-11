window.onload = function () {
    localStorage.getItem('tarefas') != {} && (listaTarefas.innerHTML = localStorage.getItem("tarefas"));
  }

let criarButton = document.getElementById('criar-tarefa')
let input = document.getElementById('texto-tarefa')
let listaTarefas = document.getElementById('lista-tarefas')
let tarefas = listaTarefas.children

function criarTarefa() {
    let tarefa = document.createElement('li');
    tarefa.innerText = input.value;
    listaTarefas.appendChild(tarefa);
    
    //Ao selecionar tarefa muda background para Cinza
    tarefa.addEventListener('click', function(tar) {
        tar.target.classList.toggle("selected");
        for(item of tarefas) {
        item != event.target && item.classList.remove("selected");
            }
        }
    )
    
    //Risca tarefa
    tarefa.addEventListener('dblclick', function(tar) {
        tar.target.classList.toggle("completed");
    })
    
    input.value = '';
}

//Apaga todas as tarefas
function apagaTudo() {
    listaTarefas.innerHTML = ''
}

//Apaga apenas uma tarefa
function apagaTarefa() {
    for (item of tarefas) {
        item.classList.contains('selected') && listaTarefas.removeChild(item)
    }
}

//Remove finalizados
function removeFinalizados() {
    for(index = 0; index < tarefas.length; index++) {
      if(tarefas[index].classList.contains('completed')) {
        listaTarefas.removeChild(tarefas[index]);
        index--;
        tarefas.length--;
      }
    }
  }