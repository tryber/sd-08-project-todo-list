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
botaoRemoveItem = document.getElementById('remover-selecionado');
botaoRemoveItem.addEventListener('click', removeItem);
function removeItem() {
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
