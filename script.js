function monstrarLista() {
  let tamanhoStorage = localStorage;

  let btAdd = document.getElementById("criar-tarefa");

  btAdd.addEventListener("click", function (event) {
    let textoSalvo = document.getElementById("texto-tarefa").value;
    let lista = document.querySelector("#lista-tarefas");

    //   localStorage.setItem(textoSalvo,textoSalvo);

    if (textoSalvo == "") {
      alert("campo vazio");
    } else {
      lista.innerHTML += `<li>${textoSalvo}</li>`;
      document.getElementById("texto-tarefa").value = "";
    }
  });
}
monstrarLista();

function selecionand() {
  const criandoCLasse = document.getElementsByClassName("selected");
  const selecionadas = document.querySelector("#lista-tarefas");
  const arrSeleci = document.getElementsByTagName('li')

  selecionadas.addEventListener("click", function (event) {
    // console.log(document.querySelectorAll(".color"))

    if (event.target.className == "selected") {
      // event.target.className = "color";
    } else if (event.target.className != "selected") {
      //e todos outros voltram para color
      for (let i = 0; i < arrSeleci.length; i++) {
        arrSeleci[i].className = "";
      }
      event.target.className += "selected";
    }
  });
}
selecionand();

function exibeWebSto() {
  let lista = document.querySelector("#lista-tarefas");

  console.log(localStorage.length);
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i += 1) {
      console.log(localStorage.key(i));
      lista.innerHTML += "<li>" + localStorage.key(i) + "</li>";
    }
  }
}
exibeWebSto();

function limparDados() {
  localStorage.clear();
}
let btlimpar = document.querySelector("#apaga-tudo");
btlimpar.addEventListener("click", limparDados);
