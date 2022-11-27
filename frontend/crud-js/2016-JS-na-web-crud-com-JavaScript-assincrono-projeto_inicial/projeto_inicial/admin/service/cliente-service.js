const criaNovaLinha = (nome, email) => {

  const linhaNovaCliente = document.createElement('tr')

  const conteudo =  `<td class="td" data-td>${nome}</td>
  <td>${email}</td>
  <td>
      <ul class="tabela__botoes-controle">
          <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
          <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
      </ul>
  </td>`

  linhaNovaCliente.innerHTML = conteudo

  return linhaNovaCliente

}

const tabela = document.querySelector(`[data-tabela]`)
const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/profile')

http.send()

http.onload = () => {
  const data = JSON.parse(http.response);
  data.forEach(elemento => {
    console.log(elemento.nome);
    tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
  });
}