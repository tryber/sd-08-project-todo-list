const lista = [];
// Insere elemento na lista
function insereElementoNaLista (){    
    let inputText = document.getElementById("texto-tarefa").value;    
    let li_ID = document.getElementById("lista-tarefas")    
    let Item = document.createElement('li');
    let ultimoElemento;  
        
      
    //Verifica se o input text está vazio
    if (inputText !== '') {
        lista.push(document.getElementById("texto-tarefa").value)
        ultimoElemento = lista[lista.length -1];                
        Item.innerHTML = ultimoElemento
        li_ID.appendChild(Item)   
        document.getElementById('texto-tarefa').value='';
    } else {
        alert("Preencha a lista com algum item!")
    }
}


// Ao clicar no botão salva o texto na lista e apaga conteúdo do input
document.getElementById("criar-tarefa").onclick = function(e) {
    insereElementoNaLista();
    e.preventDefault();
}

//Função para apagar itens da lista
let botaoApaga = document.querySelector('#apaga-tudo')
botaoApaga.onclick = () => {
    const listaInterna = document.getElementById("lista-tarefas");
    if (lista.length != 0){
        if (confirm("\t\n Tem certeza que deseja apagar todos os itens da lista? \t\n")){            
            while (listaInterna.firstChild) {
                listaInterna.removeChild(listaInterna.lastChild);
            }
         }
    } else {
        alert("\t Não há itens em sua lista! \t")
    }   
}