window.onload = function () {
  // Add conteudo na lista
  let texto = document.getElementById("texto-tarefa");
  let adicionaTarefa = document.getElementById("criar-tarefa");
  let lista = document.getElementById("lista-tarefas");

  adicionaTarefa.addEventListener("click", function () {
    let tarefa = document.createElement("li");
    tarefa.classList.add("item-list");
    tarefa.innerText = texto.value;
    lista.appendChild(tarefa);
    texto.value = "";
  });
  // Muda background dos itens da lista
  let taskList = document.getElementsByClassName("item-list");
  lista.addEventListener("click", function (event) {
    for (let index = 0; index < taskList.length; index += 1) {
      if (taskList[index].classList.contains("selected") == true) {
        taskList[index].classList.remove("selected");
      }
      event.target.classList.add("selected");
    }
  });
  // Add a clase completed aos itens após duble click
  lista.addEventListener("dblclick", function (event) {
    if (event.target.classList.contains("completed") == false) {
      event.target.classList.add("completed");
    } else {
      event.target.classList.remove("completed");
    }
  });
  // Botão apaga tudo
  document.getElementById("apaga-tudo").addEventListener("click", function () {
    let item = document.querySelectorAll(".item-list");
    for (let index = 0; index < item.length; index += 1) {
      lista.removeChild(item[index]);
    }
  });
  // Remove tarefas finalizadas
  document
    .getElementById("remover-finalizados")
    .addEventListener("click", function () {
      let item = document.querySelectorAll(".item-list");
      for (let index = 0; index < item.length; index += 1) {
        if (item[index].classList.contains("completed")) {
          lista.removeChild(item[index]);
        }
      }
    });
  // Remove selecionado
  document
    .getElementById("remover-selecionado")
    .addEventListener("click", function () {
      let item = document.querySelectorAll(".item-list");
      for (let index = 0; index < item.length; index += 1) {
        if (item[index].classList.contains("selected")) {
          lista.removeChild(item[index]);
        }
      }
    });
  // Salva tarefas
  document
    .getElementById("salvar-tarefas")
    .addEventListener("click", function () {
      localStorage.clear();
      tarefasArray = [];
      let getItemList = document.querySelectorAll(".item-list");
      for (let index = 0; index < getItemList.length; index += 1) {
        let itemTarefaLista = {
          item: getItemList[index].innerText,
          class: getItemList[index].className,
        };
        tarefasArray.push(itemTarefaLista);
      }
      localStorage.setItem("tarefa", JSON.stringify(tarefasArray));
    });
  // Recupera dados
  let tarefaSalva = JSON.parse(localStorage.getItem("tarefa"));
  if (localStorage.tarefa != undefined) {
    for (let index = 0; index < tarefaSalva.length; index += 1) {
      let tarefa = document.createElement("li");
      tarefa.className = tarefaSalva[index].class;
      tarefa.innerText = tarefaSalva[index].item;
      lista.appendChild(tarefa);
    }
  }
  // Mover itens

  let getItemList = document.getElementsByClassName("item-list");
  let cima = document.getElementById("mover-cima");
  let baixo = document.getElementById("mover-baixo");

  // Descer
  baixo.addEventListener("click", function () {
    if (document.querySelector('.selected')) {
      let selecionado = document.querySelector('.selected');
      if (selecionado.nextElementSibling) {
        let nextSelecionado = selecionado.nextElementSibling.outerHTML;
        selecionado.nextElementSibling.outerHTML = selecionado.outerHTML;
        selecionado.outerHTML = nextSelecionado;
      }
    }
    // for (let index = 0; index < getItemList.length; index += 1) {
    //   if (getItemList[index].classList.contains("selected") && index + 1 < getItemList.length) {

    //     let proximoClass = getItemList[index].nextElementSibling.className;
    //     let selecionado = getItemList[index].innerText;
    //     let selecionadoClass = getItemList[index].className;
    //     getItemList[index].innerText = getItemList[index].nextElementSibling.innerText;
    //     getItemList[index].className = proximoClass;
    //     getItemList[index].nextElementSibling.innerText = selecionado;
    //     console.log(getItemList[index]);
    //     getItemList[index].nextElementSibling.className = selecionadoClass; 
    //   }
    // }
    
  });
  // Subir
  cima.addEventListener("click", function () {
    for (let index = 0; index < getItemList.length; index += 1) {
      if (getItemList[index].classList.contains("selected") && index - 1 >= 0) {
        let anteriorClass = getItemList[index].previousElementSibling.className;
        let selecionado = getItemList[index].innerText;
        let selecionadoClass = getItemList[index].className;
        getItemList[index].innerText = getItemList[index].previousElementSibling.innerText;
        getItemList[index].className = anteriorClass;
        getItemList[index].previousElementSibling.className = selecionadoClass;
        getItemList[index].previousElementSibling.innerText = selecionado;
      }
    }
  });
};
