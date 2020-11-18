let listaTarefas = document.getElementById('lista-tarefas');
let textoTarefa = document.getElementById('texto-tarefa');
let criarTarefa = document.getElementById('criar-tarefa');
let apagaTudo = document.getElementById('apaga-tudo');
let removerFinalziados = document.getElementById('remover-finalizados');
criarTarefa.addEventListener("click", novasTarefas);
apagaTudo.addEventListener("click", removeTudo);
removerFinalziados.addEventListener('click', removeApenasFinalizados);
function novasTarefas() {
  let descricaoTarefa = textoTarefa.value;
  let novaTarefa = document.createElement('li');
  novaTarefa.className = 'todas-tarefas';
  novaTarefa.innerText = descricaoTarefa;
  novaTarefa.addEventListener('dblclick', tarefaCompletada);
  novaTarefa.addEventListener('click', mudarCor);
  listaTarefas.appendChild(novaTarefa);
  textoTarefa.value = '';
}
function removeTudo() {
  listaTarefas.innerHTML = '';
}
let todasTarefas = document.getElementsByClassName('todas-tarefas');
function mudarCor(event) {
  for (let i = 0; i < todasTarefas.length; i++) {
    todasTarefas[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
}
function tarefaCompletada(event) {
  let elemento = event.target;
  if (elemento.classList.contains('completed')) {
    elemento.classList.remove('completed');
  } else {
    elemento.classList.add('completed');
  }
}
function removeApenasFinalizados(event) {
  let apagaConcluidos = document.querySelectorAll('.completed');
  apagaConcluidos.forEach((item) => {
    if (item.classList.contains('completed')) {
      listaTarefas.removeChild(item);
    }
  });
}
botaoParaCima = document.getElementById('mover-cima');
botaoParaCima.addEventListener('click', moveParaCima);
function moveParaCima() {
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].style.backgroundColor == 'rgb(128, 128, 128)') {
      if (todasTarefas[i] == todasTarefas[0]) {
        todasTarefas[i] = todasTarefas[0].innerText;
      } else {
        let moveClasse = todasTarefas[i].className;
        todasTarefas[i].className = todasTarefas[i - 1].className;
        todasTarefas[i - 1].className = moveClasse;
        let moveCor = todasTarefas[i].style.backgroundColor;
        todasTarefas[i].style.backgroundColor = todasTarefas[i - 1].style.backgroundColor;
        todasTarefas[i - 1].style.backgroundColor = moveCor;
        let auxiliar = todasTarefas[i].innerText;
        todasTarefas[i].innerText = todasTarefas[i - 1].innerText;
        todasTarefas[i - 1].innerText = auxiliar;
      }
    }
  }
}

let botaoParaBaixo = document.getElementById('mover-baixo');
botaoParaBaixo.addEventListener('click', moveParaBaixo);
function moveParaBaixo() {
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].style.backgroundColor == 'rgb(128, 128, 128)') {
      if (todasTarefas[i] == todasTarefas[todasTarefas.length - 1]) {
        todasTarefas[i] = todasTarefas[todasTarefas.length - 1].innerText;
      } else {
        let moveClasse = todasTarefas[i].className;
        todasTarefas[i].className = todasTarefas[i + 1].className;
        todasTarefas[i + 1].className = moveClasse;
        let moveCor = todasTarefas[i].style.backgroundColor;
        todasTarefas[i].style.backgroundColor = todasTarefas[i + 1].style.backgroundColor;
        todasTarefas[i + 1].style.backgroundColor = moveCor;
        let auxiliar = todasTarefas[i].innerText;
        todasTarefas[i].innerText = todasTarefas[i + 1].innerText;
        todasTarefas[i + 1].innerText = auxiliar;
      }
    }
  }
}
let botaoRemoveItem = document.getElementById('remover-selecionado');
botaoRemoveItem.addEventListener('click', removeItem);
function removeItem() {
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].style.backgroundColor === "rgb(128, 128, 128)") {
      todasTarefas[i].parentNode.removeChild(todasTarefas[i]);
    }
    console.log('remove item');
  }
}
let botaoSalvarTarefas = document.getElementById('salvar-tarefas');
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
function salvarTarefas() {
  localStorage.setItem("lista", listaTarefas.innerHTML);
}
window.onload = function () {
  let listaSalva = localStorage.getItem("lista");
  listaTarefas.innerHTML = listaSalva;
};
