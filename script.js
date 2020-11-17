const olList = document.getElementById('lista-tarefas');
let inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriaTarefa = document.getElementById('criar-tarefa');
console.log(inputTextoTarefa.value);
console.log(olList);
console.log(btnCriaTarefa);
// adiciona li
function adicionaLi() {
    btnCriaTarefa.addEventListener('click', addTarefa);
    function addTarefa() {
        if(inputTextoTarefa.value !== '' && inputTextoTarefa.value !== ' ') {
            const olItem = document.createElement('li');
            olList.style.listStyleType = 'decimal';
            olItem.innerHTML = inputTextoTarefa.value;
            olList.appendChild(olItem);
            console.log(olItem.innerText);
            inputTextoTarefa.value ='';
        }
        inputTextoTarefa.focus();
    }
}adicionaLi();
// function adicionaLi() {
//     btnCriaTarefa.addEventListener('click', addTarefa);
//     function addTarefa() {
//         // const olItem = document.createElement('li');
//         // olList.appendChild(olItem);
//         // console.log(inputTextoTarefa.value);
//     }
// }adicionaLi();