//Requisito 5
const pai = document.getElementById("lista-tarefas")
const texto = document.getElementById("texto-tarefa")
function botao() {
    const botao1 = document.getElementById("criar-tarefa");
    botao1.addEventListener("click", (event) => {
        const linha = document.createElement("li");
        pai.appendChild(linha);
        linha.innerText = texto.value;
    })
    texto.addEventListener("click", (event) => {
        if (texto !== "") {
            texto = "";
        }
    })
}
botao();