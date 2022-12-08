import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
  const linhaNovaCliente = document.createElement("tr");

  const conteudo = `<td class="td" data-td>${nome}</td>
  <td>${email}</td>
  <td>
    <ul class="tabela__botoes-controle">
      <li>
        <a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a>
      </li>
      <li>
        <button class="botao-simples botao-simples--excluir" type="button">Excluir</button>
      </li>
    </ul>
  </td>`;

  linhaNovaCliente.innerHTML = conteudo;
  linhaNovaCliente.dataset.id = id;

  return linhaNovaCliente;
};

const tabela = document.querySelector(`[data-tabela]`);

clienteService.listaClientes().then((data) => {
  data.forEach((elemento) => {
    tabela.appendChild(
      criaNovaLinha(elemento.nome, elemento.email, elemento.id)
    );
  });
});

tabela.addEventListener("click", (evento) => {
  let ehBotao =
    evento.target.className == "botao-simples botao-simples--excluir";
  if (ehBotao) {
    const linhaCliente = evento.target.closest('[data-id]')
    let id = linhaCliente.dataset.id
    clienteService.deletaCliente(id).then(
      () => {
        linhaCliente.remove();
      }
    )
  }
});
