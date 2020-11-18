const olList = document.getElementById('lista-tarefas');
let inputTextoTarefa = document.getElementById('texto-tarefa');
const btnCriaTarefa = document.getElementById('criar-tarefa');
const btnApagaTudo = document.getElementById('apaga-tudo');
// adiciona li
function adicionaLi() {
    btnCriaTarefa.addEventListener('click', addTarefa);
    function addTarefa() {
        if(inputTextoTarefa.value !== '' && inputTextoTarefa.value !== ' ') {
            const olItem = document.createElement('li');
            olList.style.listStyleType = 'decimal';
            // olItem.classList = 'item';
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
                    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
                });
            }
        }addSelected();

        //duplo clique
        function duploClique() {
            olList.addEventListener('dblclick', function (evento) {
                if (evento.target.classList.contains('completed')) {
                  evento.target.classList.remove('completed');
                } else {
                evento.target.classList.add('completed');
                }
            });
        }duploClique();
        // apagatudo
        function apagaTudo() {
            btnApagaTudo.addEventListener('click', function (evento) {
                if (evento.target.id === 'apaga-tudo') olList.innerHTML = '';
            });
        }apagaTudo();
    
    }
}adicionaLi();