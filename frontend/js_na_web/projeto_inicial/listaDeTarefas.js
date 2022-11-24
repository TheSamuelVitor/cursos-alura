(() => {
  const criarTarefa = (event) => {
    event.preventDefault();

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");

    const tarefa = document.createElement('li');
    const conteudo = `<p class="content">${input.value}</p>`;

    tarefa.innerHTML = conteudo;
    tarefa.classList.add('task')

    tarefa.appendChild(BotaoConclui())
    lista.appendChild(tarefa);

    input.value = "";
  };

  const novaTarefa = document.querySelector("[data-form-button]");

  novaTarefa.addEventListener("click", criarTarefa);

  const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add("check-button")
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener("click", concluirTarefa);
    return botaoConclui;
  }

  const concluirTarefa = (evento) => {
    const botaoConclui = evento.target

    const tarefaCompleta = botaoConclui.parentElement

    tarefaCompleta.classList.toggle('done')
  }
}
)()