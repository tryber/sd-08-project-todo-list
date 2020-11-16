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
const selecionadas = document.querySelector("#lista-tarefas");
function selecionand() {
  const criandoCLasse = document.getElementsByClassName("selected");

  const arrSeleci = document.getElementsByTagName("li");

  selecionadas.addEventListener("click", function (event) {
    // console.log(document.querySelectorAll(".color"))

    if (event.target.className == "selected") {
      // event.target.className = "color";
    } else if (event.target.className != "selected completed") {
      //e todos outros voltam para color
      for (let i = 0; i < arrSeleci.length; i++) {
        arrSeleci[i].classList.remove("selected");
      }
      event.target.className += " selected";
    }
  });
  removerFinalizados();
}
selecionand();

function sublinhando() {
  console.log(selecionadas);
  selecionadas.addEventListener("dblclick", function (event) {
    event.target.className += " completed";
  });
  removerFinalizados();
}
sublinhando();

/**function exibeWebSto() {
  let lista = document.querySelector("#lista-tarefas");

  console.log(localStorage.length);
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i += 1) {
      console.log(localStorage.key(i));
      lista.innerHTML += "<li>" + localStorage.key(i) + "</li>";
    }
  }
}
exibeWebSto();**/

function limparDados() {
  let btlimpar = document.querySelector("#apaga-tudo");
  let select = document.getElementById("lista-tarefas");
  btlimpar.addEventListener("click", function () {
    select.innerHTML = "";
  });
}
limparDados();

function removerFinalizados() {
  let btRemoveFina = document.querySelector("#remover-finalizados");

  btRemoveFina.addEventListener("click", function () {
    let selecc = document.getElementsByClassName("completed");

    for (let i = 0; i < selecc.length; i += 1) {
      selecc[i].remove();
    }
    /** for (let i = 0; i < sele1.length; i += 1) {
      
      sele1[i].remove()
    }*/
  });
}
removerFinalizados();


let btCima = document.querySelector("#mover-cima");
btCima.addEventListener("click", function () {
  /*   console.log(document.querySelectorAll('li')) */
  let arra = document.getElementsByTagName("li");
  let arrayLi = Object.values(arra);
  console.log('fass',arrayLi);
  for (let i = 0; i < arrayLi.length; i += 1) {
    let x = arrayLi[i].className.trim();
    if (x == "selected" || x == "selected completed") {
      let y = arrayLi.indexOf(arrayLi[i]);
     
      function changePosition(arr, from, to) {
        arr.splice(to, 0, arr.splice(from, 1)[0]);
        return arr;
      }
      
      let vaii = changePosition(arrayLi, y, y - 1);
      console.log(typeof vaii)
      //console.log(vaii[i].textContent)
      document.querySelector("#lista-tarefas").innerText=vaii
      
    }
  }
});

