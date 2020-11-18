const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const criarTarefa = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const removerFinalziados = document.getElementById('remover-finalizados');
criarTarefa.addEventListener("click", novasTarefas);
apagaTudo.addEventListener("click", removeTudo);
removerFinalziados.addEventListener('click', removeApenasFinalizados);
function novasTarefas() {
  const descricaoTarefa = textoTarefa.value;
  const novaTarefa = document.createElement('li');
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
const todasTarefas = document.getElementsByClassName('todas-tarefas');
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
  let indexSelecionado = 0;
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].style.backgroundColor === "rgb(128, 128, 128)") {
      indexSelecionado = i;
    }
  }
  if (indexSelecionado - 1 < 0) {
    todasTarefas[indexSelecionado].style.backgroundColor = "";
    todasTarefas[todasTarefas.length - 1].style.backgroundColor = "rgb(128, 128, 128)";
  } else {
    todasTarefas[indexSelecionado].style.backgroundColor = "";
    todasTarefas[indexSelecionado - 1].style.backgroundColor = "rgb(128, 128, 128)";
  }
  let atual = todasTarefas[indexSelecionado].innerText;
  if (indexSelecionado - 1 < 0) {
    let ultimo = todasTarefas[todasTarefas.length - 1].innerText;
    todasTarefas[todasTarefas.length - 1].innerText = atual;
    todasTarefas[indexSelecionado].innerText = ultimo;
  } else {
    let anterior = todasTarefas[indexSelecionado - 1].innerText;
    todasTarefas[indexSelecionado - 1].innerText = atual;
    todasTarefas[indexSelecionado].innerText = anterior;
  }
}
botaoParaBaixo = document.getElementById('mover-baixo');
botaoParaBaixo.addEventListener('click', moveParaBaixo);
function moveParaBaixo() {
  let indexSelecionado = 0;
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].style.backgroundColor === "rgb(128, 128, 128)") {
      indexSelecionado = i;
    }
  }
  if (indexSelecionado == todasTarefas.length - 1) {
    todasTarefas[indexSelecionado].style.backgroundColor = "";
    todasTarefas[0].style.backgroundColor = "rgb(128, 128, 128)";
  } else {
    todasTarefas[indexSelecionado].style.backgroundColor = "";
    todasTarefas[indexSelecionado + 1].style.backgroundColor = "rgb(128, 128, 128)";
  }
  let atual = todasTarefas[indexSelecionado].innerText;
  if (indexSelecionado == todasTarefas.length - 1) {
    let primeiro = todasTarefas[0].innerText;
    todasTarefas[0].innerText = atual;
    todasTarefas[indexSelecionado].innerText = primeiro;
  } else {
    let proximo = todasTarefas[indexSelecionado + 1].innerText;
    todasTarefas[indexSelecionado + 1].innerText = atual;
    todasTarefas[indexSelecionado].innerText = proximo;
  }
}
botaoRemoveItem = document.getElementById('remover-selecionado');
botaoRemoveItem.addEventListener('click', removeItem);
function removeItem(){
  for (let i = 0; i < todasTarefas.length; i += 1) {
    if (todasTarefas[i].style.backgroundColor === "rgb(128, 128, 128)") {
      todasTarefas[i].parentNode.removeChild(todasTarefas[i]);
    }
  console.log('remove item');
}
}
botaoSalvarTarefas = document.getElementById('salvar-tarefas');
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
function salvarTarefas() {
  localStorage.setItem("lista", listaTarefas.innerHTML);
}
window.onload = function () {
  let listaSalva = localStorage.getItem("lista");
  listaTarefas.innerHTML = listaSalva;
};
