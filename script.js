let botaoAdiciona = document.getElementById('criar-tarefa'); 
let caixaDeTexto = document.getElementById('texto-tarefa'); 
let listaOrdenada = document.getElementById('lista-tarefas'); 

botaoAdiciona.addEventListener('click', functionCriaTarefa); 
function functionCriaTarefa() {
    let listaDeItens = document.createElement('li');
    listaDeItens.innerText = caixaDeTexto.value;
    listaOrdenada.appendChild(listaDeItens);
    caixaDeTexto.value = '';
}
function corFundoClicado() {
    const listaOrdenada = document.getElementById('lista-tarefas');
    const color = 'rgb(128, 128, 128)';
    listaOrdenada.addEventListener('click', (event) => {
        event.target.style.backgroundColor = color;
        console.log(event.target);
    });
}  
corFundoClicado();