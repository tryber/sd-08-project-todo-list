var listaOrdenada = document.querySelector("#lista-tarefas");

window.onload = function () {
  botaoAdicionar();

  checaLocalStorage();

  document
    .querySelector("#remover-selecionado")
    .addEventListener("click", removerSelecionado);

  document
    .querySelector("#remover-finalizados")
    .addEventListener("click", removerCompletos);

  document.querySelector("#apaga-tudo").addEventListener("click", removerTodos);

  document
    .querySelector("#mover-cima")
    .addEventListener("click", moverParaCima);

  document
    .querySelector("#mover-baixo")
    .addEventListener("click", moverParaBaixo);

  document
    .querySelector("#salvar-tarefas")
    .addEventListener("click", salvarLista);
};

function criarLista(string) {
  if (string === "") return alert("Input esta vazio");

  let novoItem = document.createElement("li");
  novoItem.classList.add("itemLista");

  adicionarEventosItems(novoItem);

  novoItem.innerHTML = string;
  listaOrdenada.appendChild(novoItem);
}

function adicionarEventosItems(item) {
  item.addEventListener("click", (e) => {
    removerCinzaTodos();
    e.target.classList.add("selected");
  });
  item.addEventListener("dblclick", (e) => {
    e.target.classList.toggle("completed");
  });
}

function removerCinzaTodos() {
  let removerCinza = document.querySelectorAll(".selected");
  removerCinza.forEach((e) => {
    e.classList.remove("selected");
  });
}

function botaoAdicionar() {
  let botaoAdicionar = document.querySelector("#criar-tarefa");
  let texto;
  botaoAdicionar.addEventListener("click", (e) => {
    let inputValue = document.querySelector("#texto-tarefa");
    texto = inputValue.value;
    criarLista(texto);
    inputValue.value = "";
  });
}

function removerSelecionado() {
  let elemento = document.querySelector(".selected");
  if (elemento === null) return;
  listaOrdenada.removeChild(elemento);
}

function removerCompletos() {
  let elementos = document.querySelectorAll(".completed");
  elementos.forEach((e) => {
    listaOrdenada.removeChild(e);
  });
}

function removerTodos() {
  let elementos = document.querySelectorAll(".itemLista");
  elementos.forEach((e) => {
    listaOrdenada.removeChild(e);
  });
}

function moverParaCima() {
  let elementos = document.querySelectorAll(".itemLista");
  let selecionado = document.querySelector(".selected");

  for (let i = 0; i < elementos.length; i++) {
    if (elementos[i] === selecionado) {
      if (i === 0) {
      } else {
        elementos[i] = listaOrdenada.insertBefore(
          elementos[i],
          elementos[i - 1]
        );
      }
    }
  }
}

function moverParaBaixo() {
  let elementos = document.querySelectorAll(".itemLista");
  let selecionado = document.querySelector(".selected");

  for (let i = 0; i < elementos.length; i++) {
    if (elementos[i] === selecionado) {
      if (i === elementos.length - 1) {
      } else {
        elementos[i + 1] = listaOrdenada.insertBefore(
          elementos[i + 1],
          elementos[i]
        );
      }
    }
  }
}

function salvarLista() {
  let listaEmString = listaOrdenada.innerHTML;
  localStorage.clear();
  localStorage.setItem("lista", JSON.stringify(listaEmString));
}

function checaLocalStorage() {
  let info = JSON.parse(localStorage.getItem("lista"));
  if (info !== "") {
    listaOrdenada.innerHTML = info;
    let elementos = document.querySelectorAll(".itemLista");
    elementos.forEach((e) => {
      adicionarEventosItems(e);
    });
  }
  return;
}
