const ListaTarefas = document.querySelector("#lista-tarefas");
const selInput = document.querySelector("#texto-tarefa");
const btAdd = document.querySelector("#criar-tarefa");
const btApgTudo = document.querySelector("#apaga-tudo");
const btApgFin = document.querySelector("#remover-finalizados");
const btCima = document.querySelector("#mover-cima");
const btBaixo = document.querySelector("#mover-baixo");
const btApgSel = document.querySelector("#remover-selecionado");
const btSalvar = document.querySelector("#salvar-tarefas");

function desSelec() {
  let todasClassesSelected = document.querySelectorAll(".selected");
  for (let i = 0; i < todasClassesSelected.length; i += 1) {
    todasClassesSelected[i].classList.remove("selected");
  }
}
function desCompleted() {
  let todasClassesCompleted = document.querySelectorAll(".completed");
  for (let i = 0; i < todasClassesCompleted.length; i += 1) {
    todasClassesCompleted[i].classList.remove("completed");
  }
}
function addClassComplete(event) {
  event.target.classList.toggle("completed");
}

function addClass(event) {
  desSelec();
  event.target.classList.toggle("selected");
}

function apagarTudo() {
  ListaTarefas.innerHTML = "";
}
btApgTudo.addEventListener("click", apagarTudo);

function insereTexto() {
  if (selInput.value == "") {
    alert("vazio");
  } else {
    const creatLi = document.createElement("li");
    creatLi.textContent = selInput.value;
    ListaTarefas.appendChild(creatLi);
    selInput.value = "";
    creatLi.addEventListener("click", addClass);
    creatLi.addEventListener("dblclick", addClassComplete);
  }
}

btAdd.addEventListener("click", insereTexto);

btApgFin.addEventListener("click", function () {
  let c = document.querySelectorAll(".completed");

  for (let i = 0; i < c.length; i += 1) {
    c[i].remove();
  }
});

btApgSel.addEventListener("click", function () {
  let c = document.querySelector(".selected");
 // console.log(c.classList.value);
  if (c == null || c.classList.value == "selected completed") {
    return;
  }

  c.remove(0);
});

function moverBaixo() {
  let liSelected = document.querySelector(".selected");
  let proximo = liSelected.nextElementSibling;
  if(proximo == null){return}
  if(liSelected == null){return}
  if (liSelected && proximo !== null) {
    let elementoPai = liSelected.parentNode;
    elementoPai.insertBefore(liSelected.nextElementSibling, liSelected);
  }
}
btBaixo.addEventListener("click", moverBaixo);

function moverCima() {
  let liSelected = document.querySelector(".selected");
  let anterior = liSelected.previousElementSibling;
  if(anterior == null){return}
  if(liSelected == null){return}
  if (liSelected && anterior !== null) {
    let elementoPai = liSelected.parentNode;
    elementoPai.insertBefore(liSelected, liSelected.previousElementSibling);
  }
}
btCima.addEventListener("click", moverCima);

function salvarLista() {
  let mandarWeb = document.querySelector("#lista-tarefas").innerHTML;
  localStorage.clear();
  /*  for(let i=0 ; i<mandarWeb.length ; i+=1){
  } */
  localStorage.setItem("item", JSON.stringify(mandarWeb));
}

btSalvar.addEventListener("click", salvarLista);

function carregarLista() {
  let k = JSON.parse(localStorage.getItem("item"));

  document.getElementById("lista-tarefas").innerHTML = k;
  let h = document.querySelectorAll("li");
  for (let i = 0; i < h.length; i += 1) {
    h[i].classList.remove("selected");
    h[i].addEventListener("click", addClass);
    h[i].addEventListener("dblclick", addClassComplete);
  }
}
document.onload = carregarLista();
