
let elementAdd = document.getElementById("criar-tarefa");


elementAdd.addEventListener("click", function()
{
    let lineAdd = document.createElement("li");
    let getInput = document.getElementById("texto-tarefa"); // input
    let newText = document.createTextNode(getInput.value); // value do input
    let getIdOl = document.getElementById("lista-tarefas"); // OK


    lineAdd.appendChild(newText);                           // input.value vira filho do li
    lineAdd.classList.add("lines");


    getIdOl.appendChild(lineAdd);                           //linhas viram filho de ol


    lineAdd.addEventListener("click", color);
    lineAdd.addEventListener("dblclick", completed);

    getInput.value = "";            // esvazia input depois de pegar valor
})

function color(event)
{
    for(let l of document.getElementsByClassName("lines"))
    {
        if(l.style.backgroundColor = "rgb(128,128,128)")
            l.style.backgroundColor = null;
    }
    event.target.style.backgroundColor = "rgb(128,128,128)";
}

function completed(event)
{
    let target = event.target;
    if(target.classList.contains("completed"))
        target.classList.remove("completed");
    else
        target.classList.add("completed");
}

let getClear = document.getElementsByTagName("li");
let buttonClear = document.getElementById("apaga-tudo");

buttonClear.addEventListener("click", function()
{
    for(let l = getClear.length -1; l >= 0; l -= 1)
    {
        getClear[l].remove();
    }

})

let finalizados = document.getElementsByClassName("completed");
let getClearFinalizados = document.getElementById("remover-finalizados");

getClearFinalizados.addEventListener("click", function()
{
    for(let l = finalizados.length -1; l >= 0; l -= 1)
    {
        finalizados[l].remove();
    }
})














//
//
//
//
//
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/button
// https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
// https://developer.mozilla.org/pt-BR/docs/Web/Events
// https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/addEventListener
// https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement
// https://www.devmedia.com.br/trabalhando-com-listas-ordenadas-no-html/21739
// https://stackoverflow.com/questions/9107541/javascript-to-create-an-li-and-append-to-an-ol