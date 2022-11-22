const criarTarefa = (event) => {
  event.preventDefault();
  
  const input = document.querySelector("[data-form-input]");
  console.log(input.value);
  
  input.value = "";
}

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", criarTarefa);
