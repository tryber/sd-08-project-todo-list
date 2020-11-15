const lista = [];
// Insere elemento na lista
function insereElementoNaLista() {
  let inputText = document.getElementById("texto-tarefa").value;
  let li_ID = document.getElementById("lista-tarefas");
  let Item = document.createElement("li");
  Item.classList.add("list-item");
  let ultimoElemento;
  //Verifica se o input text está vazio
  if (inputText !== "") {
    lista.push(document.getElementById("texto-tarefa").value);
    ultimoElemento = lista[lista.length - 1];
    Item.innerHTML = ultimoElemento;
    li_ID.appendChild(Item);
    document.getElementById("texto-tarefa").value = "";
  } else {
    alert("Preencha a lista com algum item!");
  }
  setColor();
  doubleClick(Item);
}
// Ao clicar no botão salva o texto na lista e apaga conteúdo do input
document.getElementById("criar-tarefa").onclick = function (e) {
  insereElementoNaLista();
  e.preventDefault();
};
document.getElementById("criar-tarefa").keyup = function (e) {
  insereElementoNaLista();
  e.preventDefault();
};



//Mover para cima as tarefas
document.getElementById('id_moveCima').addEventListener('click', function () {
  let listaAtual = document.querySelector('#lista-tarefas').children;
  let indiceMenos;  
  for (let i = 0; i < listaAtual.length; i++){
    if (listaAtual[i].className === 'list-item-active'){      
      indiceMenos = listaAtual[i-1]        
      if (indiceMenos !== undefined){    
        let itemAtual = document.querySelector('.list-item-active')
        let itemAtualText = document.querySelector('.list-item-active').innerText   
        let itemPosterior = document.querySelector('.list-item-active').previousElementSibling
        let itemPosteriorText = document.querySelector('.list-item-active').previousElementSibling.innerText
        var aText = itemPosteriorText;    
       
        itemPosterior.className ='list-item-active'
        itemPosterior.innerText = itemAtualText
        itemAtual.className = 'list-item'
        itemAtual.innerText = aText
      }else {         
        alert('Não há itens acima') 
      }   
    } 
  } 
})
//Mover para baixo a tarefa
document.getElementById('id_moveBaixo').addEventListener('click', function () {
  let listaAtual = document.querySelector('#lista-tarefas').children;  
  let indiceMais;
  for (let i = 0; i < listaAtual.length; i++){
    if (listaAtual[i].className === 'list-item-active'){      
      indiceMais = listaAtual[i+1]        
      if (indiceMais !== undefined){    
        let itemAtual = document.querySelector('.list-item-active')
        let itemAtualText = document.querySelector('.list-item-active').innerText   
        let itemAnterior = document.querySelector('.list-item-active').nextElementSibling
        let itemAnteriorText = document.querySelector('.list-item-active').nextElementSibling.innerText
        var aText = itemAnteriorText;           
        itemAnterior.className ='list-item-active'
        itemAnterior.innerText = itemAtualText
        itemAtual.className = 'list-item'
        itemAtual.innerText = aText
      }  
    } 
  } 
})
//Função para apagar itens da lista
let botaoApaga = document.querySelector("#apaga-tudo");
botaoApaga.onclick = () => {
  const listaInterna = document.getElementById("lista-tarefas");
  if (lista.length != 0) {
    if (
      confirm(
        "\t\n Tem certeza que deseja apagar todos os itens da lista? \t\n"
      )
    ) {
      while (listaInterna.firstChild) {
        listaInterna.removeChild(listaInterna.lastChild);
      }
    }
  } else {
    alert("\t Não há itens em sua lista! \t");
  }
};
//Ao clicar em um dos itens a variável recebe a classe active
function setColor() {
  let item = document.querySelectorAll("li");
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function (event) {
      if (item[i].className !== "completed") {
        reverteClasses();
        event.target.className = "list-item-active";
      }
    });
  }
}
//Ao clicar duas vezes o item recebe a classe completed
function doubleClick(item) {
  item.addEventListener("dblclick", function (event) {
    if (item.className !== "completed") {
      event.target.className = "completed";
    } else {
      event.target.className = "list-item";
    }
  });
}
//Função para reverter classe dos itens da lista, é chamada na função serColor
function reverteClasses() {
  let itemActive = document.querySelectorAll("li");
  for (let i = 0; i < itemActive.length; i++) {
    if (itemActive[i].className !== "completed") {
      itemActive[i].className = "list-item";
    }
  }
}
// //Função para apagar itens selecionados da lista
let botaoApagaSelecionados = document.querySelector("#remover-finalizados");
botaoApagaSelecionados.onclick = () => {
  let itensDalista = document.querySelectorAll("li");
  let listaInterna = document.querySelector("#lista-tarefas");

  if (lista.length != 0) {
    if (confirm("\t\n Deseja apagar as tarefas selecionadas? \t\n")) {
      for (let i = 0; i < itensDalista.length; i++) {
        if (itensDalista[i].className === "completed") {
          listaInterna.removeChild(itensDalista[i]);
        }
      }
    }
  } else {
    alert("\t Não há itens na lista! \t");
  }
};
//Apaga tarefa selecionada
let botaoApagaTarefaSelecionada = document.querySelector(
  "#remover-selecionado"
);
botaoApagaTarefaSelecionada.onclick = () => {
  let itensDalista = document.querySelectorAll("li");
  let listaInterna = document.querySelector("#lista-tarefas");
  if (lista.length != 0) {
    if (confirm("\t\n Deseja apagar a tarefa? \t\n")) {
      for (let i = 0; i < itensDalista.length; i++) {
        if (itensDalista[i].className === "list-item-active") {
          listaInterna.removeChild(itensDalista[i]);
        }
      }
    }
  } else {
    alert("\t Não há itens na lista! \t");
  }
};
