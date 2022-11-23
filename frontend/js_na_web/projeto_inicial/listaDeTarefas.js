const criarTarefa = (event) => {
  event.preventDefault();
  
  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  
  const tarefa = document.createElement('li');
  const conteudo = `<p class="content">${input.value}</p>`;
  
  tarefa.innerHTML = conteudo;
  tarefa.classList.add('task')

  lista.appendChild(tarefa);

  input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);
