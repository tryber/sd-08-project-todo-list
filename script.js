
let elementAdd = document.getElementById("criar-tarefa");

elementAdd.addEventListener("click", function()
{
    let getInput = document.getElementById("texto-tarefa");
    let lineAdd = document.createElement("li");
    let getIdOl = document.getElementById("lista-tarefas");

    let newText = document.createTextNode(getInput.value);
    lineAdd.appendChild(newText);
    getIdOl.appendChild(lineAdd);
    getInput.value = "";

})



















//
//
//
//
//
//
//
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/addEventListener
// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement
// https://www.devmedia.com.br/trabalhando-com-listas-ordenadas-no-html/21739
// https://stackoverflow.com/questions/9107541/javascript-to-create-an-li-and-append-to-an-ol