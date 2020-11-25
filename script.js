const qSelector = (elemento) => document.querySelector(elemento);
const qSelectorAll = (elemento) => document.querySelectorAll(elemento);
const cria = qSelector("#criar-tarefa");
const apaga = qSelector("#apaga-tudo");
const lista = qSelector("#lista-tarefas");
const removeFinalizados = qSelector("#remover-finalizados");

cria.addEventListener("click", () => {
  var texto = qSelector("#texto-tarefa");
  const lista = qSelector("#lista-tarefas");
  if (texto.value.length > 2) {
    let liTag = document.createElement("li");
    liTag.className = "tarefa";
    liTag.innerText = texto.value;
    lista.appendChild(liTag);
    texto.value = "";
    liTag.addEventListener("click", selecionar);
  } else {
    alert("Digite uma Tarefa antes de adicionar!!!");
  }
});

// const apagaTudo = document.getElementById("apaga-tudo");
// const ol = document.getElementById("lista-tarefas");
// const lindiceArray= document.getElementsByClassName(".tarefa");

// // // Remover
// // apagaTudo.addEventListener("click", function () {
// //   while (li) {
// //     ol.removeChild(ol.childNodes[0]);
// //   }
// // });

const item = document.getElementsByTagName("li");

// Deleta as tarefas concluídas
const btnApagarConc = document.getElementById("remover-finalizados");
btnApagarConc.addEventListener("click", function () {
  let listConclu = document.getElementsByClassName("completed");
  let tamanho = listConclu.length;
  for (let indiceArray = 0; indiceArray < tamanho; indiceArray += 1) {
    listConclu[0].parentNode.removeChild(listConclu[0]);
  }
});

// Marca as LI's com a cor de fundo cinza
function selecionar(event) {
  for (let indiceArray = 0; indiceArray < item.length; indiceArray += 1) {
    item[indiceArray].style.backgroundColor = "";
  }
  event.target.style.backgroundColor = "rgb(128, 128, 128)";
}

// Marca as tarefas concluídas
function completo(event) {
  if (event.target.className === "completed") {
    event.target.className = "";
  } else {
    event.target.className = "completed";
  }
}

// Apaga todos os itens da lista ordenada
const buttonApagarTudo = document.getElementById("apaga-tudo");
buttonApagarTudo.addEventListener("click", function () {
  lista.innerHTML = "";
});

// Button salva sessao
const btnSalvar = document.getElementById("salvar-tarefas");
btnSalvar.addEventListener("click", function () {
  localStorage.setItem("lista", lista.innerHTML);
});

// Lista salva
window.onload = function () {
  let tarefaSalvas = localStorage.getItem("lista");
  lista.innerHTML = tarefaSalvas;
};

// Remover tarefa selecionada
const removerBotao = document.getElementById("remover-selecionado");
removerBotao.addEventListener("click", function () {
  for (let indiceArray = 0; indiceArray < item.length; indiceArray += 1) {
    if (item[indiceArray].style.backgroundColor === "rgb(128, 128, 128)") {
      item[indiceArray].parentNode.removeChild(item[indiceArray]);
    }
  }
});

// Btn sobe
const btnSubir = document.getElementById("mover-cima");
btnSubir.addEventListener("click", function () {
  let itemMarcado;
  for (let indiceArray = 0; indiceArray < item.length; indiceArray += 1) {
    if (item[indiceArray].style.backgroundColor === "rgb(128, 128, 128)") {
      itemMarcado = indiceArray;
    }
  }
  let atual = item[itemMarcado].innerText;
  if (itemMarcado - 1 < 0) {
    false;
  } else {
    let ultimoSelecionado = item[itemMarcado - 1].innerText;
    item[itemMarcado].style.backgroundColor = "";
    item[itemMarcado].innerText = ultimoSelecionado;
    item[itemMarcado - 1].style.backgroundColor = "rgb(128, 128, 128)";
    item[itemMarcado - 1].innerText = atual;
  }
});

// Btn desce
const btnDescer = document.getElementById("mover-baixo");
btnDescer.addEventListener("click", function () {
  let itemMarcado;
  for (let indiceArray = 0; indiceArray < item.length; indiceArray += 1) {
    if (item[indiceArray].style.backgroundColor === "rgb(128, 128, 128)") {
      itemMarcado = indiceArray;
    }
  }
  let atual = item[itemMarcado].innerText;
  if (itemMarcado == item.length - 1) {
    false;
  } else {
    let proximo = item[itemMarcado + 1].innerText;
    item[itemMarcado].style.backgroundColor = "";
    item[itemMarcado].innerText = proximo;
    item[itemMarcado + 1].style.backgroundColor = "rgb(128, 128, 128)";
    item[itemMarcado + 1].innerText = atual;
  }
});
