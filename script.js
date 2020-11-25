const qSelector = (elemento) => document.querySelector(elemento);
const qSelectorAll = (elemento) => document.querySelectorAll(elemento);
const cria = qSelector("#cria-tarefa");
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
  } else {
    alert("Digite uma Tarefa antes de adicionar!!!");
  }
});

// apaga.addEventListener("click", () => {
//   const li = document.querySelectorAll("li");
//   lista.removeChild(li);
// });
