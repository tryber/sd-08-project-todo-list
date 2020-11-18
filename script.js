const olList = document.getElementById('lista-tarefas');
let inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriaTarefa = document.getElementById('criar-tarefa');
// adiciona li
function adicionaLi() {
    btnCriaTarefa.addEventListener('click', addTarefa);
    function addTarefa() {
        if(inputTextoTarefa.value !== '' && inputTextoTarefa.value !== ' ') {
            const olItem = document.createElement('li');
            olList.style.listStyleType = 'decimal';
            olItem.classList = 'item';
            // olItem.style.backgroundColor = '#fff';
            olItem.innerHTML = inputTextoTarefa.value;
            olList.appendChild(olItem);
            inputTextoTarefa.value ='';
        }
        inputTextoTarefa.focus();

            // adiciona seleção
        let ols = document.querySelectorAll('#lista-tarefas li');
        console.log(ols.length);
        function addSelected() {
            for (let index = 0; index < ols.length; index += 1) {
                ols[index].addEventListener('click',function(event){
                    for (let i = 0; i < ols.length; i += 1){
                        ols[i].style.backgroundColor = '#fff';
                    }
                    // event.target.classList.toggle('selected');
                    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
                });
            }
        }addSelected();

        //duplo clique
        
    
    }
}adicionaLi();