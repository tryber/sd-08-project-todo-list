function createButton(){
    let button = document.createElement('button')
    button.id = 'criar-tarefa'
    button.innerHTML = 'Criar Tarefa'
    let divPai = document.getElementById('section-one')
    divPai.appendChild(button)
    button.addEventListener('click',function(){
        let input = document.getElementById('texto-tarefa')
        let createLI = document.createElement('li')
        let lista = document.getElementById('lista-tarefas')
        if(input.value.length > 0){
            createLI.innerText = input.value
            lista.appendChild(createLI)
            input.value = ''
        }else{
            alert('Digite ao menos um caractere.')
        }
        
    })
}
createButton()