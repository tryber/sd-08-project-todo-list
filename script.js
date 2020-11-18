// Botão para add tarefa
let buttonCriar = document.getElementById("criar-tarefa");
let lista = document.getElementById("lista-tarefas");
buttonCriar.addEventListener("click", function () {
  let text = document.getElementById("texto-tarefa");
  let itemLista = document.createElement("li");
  itemLista.innerHTML = text.value;
  itemLista.addEventListener("click", selecionar);
  itemLista.addEventListener("dblclick", completo);
  lista.appendChild(itemLista);
  text.value = "";
});

// Selecionar item na lista
let listItem = document.getElementsByTagName("li");
function selecionar(event) {
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = "";
  }
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
}

// Indicar item completo
function completo(event) {
  if (event.target.className === "completed") {
    event.target.className = "";
  } else {
    event.target.className = "completed";
  }
}

// Botão de apagar tudo
const buttonApagarTudo = document.getElementById("apaga-tudo");
buttonApagarTudo.addEventListener("click", function () {
  lista.innerHTML = "";
});

// Botão de apagar concluídos
const buttonApagarConcluido = document.getElementById("remover-finalizados");
buttonApagarConcluido.addEventListener("click", function () {
  let listaConcluido = document.getElementsByClassName("completed");
  let size = listaConcluido.length;
  for (let j = 0; j < size; j += 1) {
    listaConcluido[0].parentNode.removeChild(listaConcluido[0]);
  }
});

// Botão de salvar lista
const buttonSalvar = document.getElementById("salvar-tarefas");
buttonSalvar.addEventListener("click", function () {
  localStorage.setItem("lista", lista.innerHTML);
});

// Recupera lista salva
window.onload = function () {
  let listaSalva = localStorage.getItem("lista");
  lista.innerHTML = listaSalva;
};

// Botão de subir
const subirBotao = document.getElementById("mover-cima");
subirBotao.addEventListener("click", function () {
  let indexSelecionado;
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].style.backgroundColor === "rgb(128, 128, 128)") {
      indexSelecionado = i;
    }
  }
  let atual = listItem[indexSelecionado].innerText;
  if (indexSelecionado - 1 < 0) {
    false;
  } else {
    let anterior = listItem[indexSelecionado - 1].innerText;
    listItem[indexSelecionado].style.backgroundColor = "";
    listItem[indexSelecionado].innerText = anterior;
    listItem[indexSelecionado - 1].style.backgroundColor = "rgb(128, 128, 128)";
    listItem[indexSelecionado - 1].innerText = atual;
  }
});

// Botão de descer
const descerBotao = document.getElementById("mover-baixo");
descerBotao.addEventListener("click", function () {
  let indexSelecionado;
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].style.backgroundColor === "rgb(128, 128, 128)") {
      indexSelecionado = i;
    }
  }
  let atual = listItem[indexSelecionado].innerText;
  if (indexSelecionado == listItem.length - 1) {
    false;
  } else {
    let proximo = listItem[indexSelecionado + 1].innerText;
    listItem[indexSelecionado].style.backgroundColor = "";
    listItem[indexSelecionado].innerText = proximo;
    listItem[indexSelecionado + 1].style.backgroundColor = "rgb(128, 128, 128)";
    listItem[indexSelecionado + 1].innerText = atual;
  }
});

//Remove Selecionado
const removerBotao = document.getElementById("remover-selecionado");
removerBotao.addEventListener("click", function () {
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i].style.backgroundColor === "rgb(128, 128, 128)") {
      listItem[i].parentNode.removeChild(listItem[i]);
    }
  }
});
