// function criaHeader() {
//   let header = document.createElement("header");
//   document.body.appendChild(header);
//   header.innerHTML = "Minha Lista de Tarefas";
// }
// criaHeader();

// function criaParagrafoFuncionamento() {
//   let paragrafo = document.createElement("p");
//   document.body.appendChild(paragrafo);
//   paragrafo.id = "funcionamento";
//   paragrafo.innerHTML =
//     "Clique duas vezes em um item para marcá-lo como completo";
// }
// criaParagrafoFuncionamento();

// function criaInput() {
//   let input = document.createElement("input");
//   document.body.appendChild(input);
//   input.type = "text";
//   input.id = "texto-tarefa";
//   input.placeholder = "item que deseja adicionar";
// }
// criaInput();

// function criaListaTarefas() {
//   let lista = document.createElement("ol");
//   document.body.appendChild(lista);
//   lista.id = "lista-tarefas";
// }
// criaListaTarefas();

// function criaBotao() {
//   let input = document.getElementById("texto-tarefa");
//   let botao = document.createElement("button");
//   let lista = document.getElementById("lista-tarefas");
//   document.body.appendChild(botao);
//   botao.id = "criar-tarefa";
//   botao.innerText = "Adicionar";
//   botao.addEventListener("click", function () {
//     if (input.value.length > 0) {
//       let novoItem = document.createElement("li");
//       novoItem.innerText = input.value;
//       lista.appendChild(novoItem);
//       input.value = "";
//     }
//   });
// }
// criaBotao();

// function mudaBackground() {
//   let lista = document.getElementById("lista-tarefas");
//   lista.addEventListener("click", function (evento) {
//     listaItens = lista.children;
//     for (let indice = 0; indice < listaItens.length; indice += 1) {
//       listaItens[indice].style.backgroundColor = "white";
//     }
//     evento.target.style.backgroundColor = "rgb(128, 128, 128)";
//   });
// }
// mudaBackground();

// //9

// function criaBotaoApagaTudo() {
//   let botaoApagaTudo = document.createElement("button");
//   let lista = document.getElementById("lista-tarefas");
//   document.body.appendChild(botaoApagaTudo);
//   botaoApagaTudo.id = "apaga-tudo";
//   botaoApagaTudo.innerText = "Limpar lista";
//   botaoApagaTudo.addEventListener("click", function () {
//     lista.innerHTML = "";
//   });
// }
// criaBotaoApagaTudo();
